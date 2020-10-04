import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';

import AddButton from './components/AddButton';

import { Container, Card, TitleArea, CardText, DeleteButton } from './styles';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

const Home = ({ navigation }: IProps) => {
	const [ showPasswords, setShowPasswords ] = useState<boolean>(false);
	return (
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
							<FeatherIcon name="eye" size={22} color="#fff" />
						) : (
							<FeatherIcon
								name="eye-off"
								size={22}
								color="#fff"
							/>
						)}
					</TouchableOpacity>
				</TitleArea>
				<Card onPress={() => console.log('editar')}>
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
			<AddButton goCreate={() => navigation.navigate('CreateEdit')} />
		</React.Fragment>
	);
};

export default Home;