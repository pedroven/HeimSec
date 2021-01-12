import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Button,
	ScrollView,
	TouchableOpacity,
	Alert
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';

import AddButton from './components/AddButton';

import { Container, Card, TitleArea, CardText, DeleteButton } from './styles';
import PINCode, {
	hasUserSetPinCode,
	resetPinCodeInternalStates,
	deleteUserPinCode
} from '@haskkor/react-native-pincode';

import PINCodeScreen from '../../components/PINCodeScreen';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

const Home = ({ navigation }: IProps) => {
	const [ showPasswords, setShowPasswords ] = useState<boolean>(false);
	const [ showPinLock, setShowPinLock ] = useState<boolean>(false);
	const [ initialAccess, setInitialAccess ] = useState<boolean>(false);
	const [ PINCodeStatus, setPINCodeStatus ] = useState<
		'choose' | 'enter' | 'locked' | undefined
	>('choose');

	const showEnterPinLock = async () => {
		const hasPIN = await hasUserSetPinCode();
		if (hasPIN) {
			setShowPinLock(true);
			setPINCodeStatus('enter');
		} else {
			console.log('deu ruim');
		}
	};

	useEffect(() => {
		setInitialAccess(true);
		showEnterPinLock();
	}, []);

	const finishProcess = async () => {
		const hasPIN = await hasUserSetPinCode();
		if (hasPIN) {
			setShowPinLock(false);
			!initialAccess && navigation.navigate('CreateEdit');
			setInitialAccess(false);
		}
	};

	return (
		<React.Fragment>
			{showPinLock && (
				<PINCodeScreen
					status={PINCodeStatus}
					finishProcess={finishProcess}
				/>
			)}
			{!showPinLock && (
				<React.Fragment>
					<Header
						goSettings={() => navigation.navigate('Settings')}
						goHome={() => navigation.navigate('Home')}
					/>
					<Container>
						<TitleArea>
							<Text style={{ color: '#FFF' }}>Minhas senhas</Text>
							<TouchableOpacity
								onPress={() => setShowPasswords(!showPasswords)}
							>
								{showPasswords ? (
									<FeatherIcon
										name="eye"
										size={22}
										color="#fff"
									/>
								) : (
									<FeatherIcon
										name="eye-off"
										size={22}
										color="#fff"
									/>
								)}
							</TouchableOpacity>
						</TitleArea>
						<Card onPress={() => navigation.navigate('CreateEdit')}>
							<CardText>Titulo</CardText>
							<CardText>url</CardText>
							<CardText
								style={
									!showPasswords && {
										letterSpacing: 4
									}
								}
							>
								{showPasswords ? 'senha' : '******'}
							</CardText>
							<DeleteButton onPress={() => console.log('Apagar')}>
								<AntIcon name="delete" size={22} color="#fff" />
							</DeleteButton>
						</Card>
					</Container>
					<AddButton
						goCreate={() => navigation.navigate('CreateEdit')}
					/>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Home;
