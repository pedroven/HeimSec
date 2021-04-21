import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../components/Header';

import AddButton from './components/AddButton';

import { Container, Card, TitleArea, CardText, DeleteButton } from './styles';
import { hasUserSetPinCode } from '@haskkor/react-native-pincode';
import SplashScreen from 'react-native-splash-screen';

import PINCodeScreen from '../../components/PINCodeScreen';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

interface Item {
	id: string;
	title: string;
	url: string;
	password: string;
}

const Home = ({ navigation }: IProps) => {
	const [ showPasswords, setShowPasswords ] = useState<boolean>(false);
	const [ showPinLock, setShowPinLock ] = useState<
		'initial' | 'active' | 'deactivated'
	>('initial');
	const [ initialAccess, setInitialAccess ] = useState<boolean>(false);
	const [ PINCodeStatus, setPINCodeStatus ] = useState<
		'choose' | 'enter' | 'locked' | undefined
	>('choose');
	const [ items, setItems ] = useState<Item[]>([]);

	const showEnterPinLock = async () => {
		const hasPIN = await hasUserSetPinCode();
		if (hasPIN) {
			setShowPinLock('active');
			setPINCodeStatus('enter');
		} else {
			setShowPinLock('deactivated');
		}
	};

	useEffect(() => {
		const init = async () => {
			setInitialAccess(true);
			SplashScreen.hide();
			await showEnterPinLock();
		};
		init();
	}, []);

	useEffect(() => {
		const getItems = async () => {
			let allItems = await AsyncStorage.getItem('Items');
			if (allItems) {
				let parsedItems = JSON.parse(allItems);
				setItems(parsedItems);
			}
		};
		getItems();
	});

	const finishProcess = async () => {
		const hasPIN = await hasUserSetPinCode();
		if (hasPIN) {
			setShowPinLock('deactivated');
			!initialAccess && navigation.navigate('CreateEdit');
			setInitialAccess(false);
		}
	};

	const deleteItem = async (id: string) => {
		Alert.alert(
			'Remover Senha',
			'Deseja realmente remover essa senha?',
			[
				{
					text: 'Cancelar',
					style: 'cancel'
				},
				{
					text: 'Sim',
					onPress: async () => {
						let allItems = await AsyncStorage.getItem('Items');
						if (allItems) {
							let parsedItems = JSON.parse(allItems);
							let newItems = parsedItems.filter((item: Item) => item.id !== id);
							await AsyncStorage.setItem('Items', JSON.stringify(newItems));
							setItems(newItems);
						}
					}
				}
			],
			{ cancelable: true }
		);
	};

	return (
		<React.Fragment>
			{showPinLock === 'active' && (
				<PINCodeScreen status={PINCodeStatus} finishProcess={finishProcess} />
			)}
			{showPinLock === 'deactivated' && (
				<React.Fragment>
					<Header
						goSettings={() => navigation.navigate('Settings')}
						goHome={() => navigation.navigate('Home')}
					/>
					<Container>
						<TitleArea>
							<Text style={{ color: '#FFF', fontSize: 16 }}>Minhas senhas</Text>
							<TouchableOpacity
								onPress={() => setShowPasswords(!showPasswords)}
							>
								{showPasswords ? (
									<FeatherIcon name="eye" size={22} color="#fff" />
								) : (
									<FeatherIcon name="eye-off" size={22} color="#fff" />
								)}
							</TouchableOpacity>
						</TitleArea>
						{items &&
							items.map((item) => (
								<Card
									key={item.id}
									onPress={() =>
										navigation.navigate('CreateEdit', {
											actionType: 'edit',
											item: item
										})}
								>
									<CardText>{item.title}</CardText>
									<CardText>{item.url}</CardText>
									<CardText
										style={
											!showPasswords && {
												letterSpacing: 4
											}
										}
									>
										{showPasswords ? item.password : '******'}
									</CardText>
									<DeleteButton onPress={() => deleteItem(item.id)}>
										<AntIcon name="delete" size={22} color="#fff" />
									</DeleteButton>
								</Card>
							))}
					</Container>
					<AddButton
						goCreate={() =>
							navigation.navigate('CreateEdit', {
								actionType: 'create'
							})}
					/>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Home;
