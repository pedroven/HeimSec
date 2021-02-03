import React, { useState } from 'react';
import { NavigationScreenProp, } from 'react-navigation';
import { RouteProp } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';

import { Button, Form, Input, Container, ButtonText } from './styles';

interface IFormData {
	title: string;
	url: string;
	password: string;
}
interface IProps {
	navigation: NavigationScreenProp<any, any>;
	route: RouteProp<any, any>;
	data?: IFormData;
}

const CreateEdit = ({ navigation, route, data }: IProps) => {
	const [ formData, setFormData ] = useState<IFormData>(
		data || {
			title: '',
			url: '',
			password: ''
		}
	);

	const handleSubmit = async () => {
		try {
			console.log(route.params && route.params.actionType);
			if (route.params) {
				if (route.params.actionType === 'create') {
					const allItems = await AsyncStorage.getItem('Items');
					console.log(allItems);
				}
				if (route.params.actionType === 'create') {

				}
			}
			// if (actionType === 'create') console.log('show');
			// await AsyncStorage.setItem('@storage_Key', value)
		  } catch (e) {
			// saving error
		  }
		navigation.navigate('Home')
	};

	return (
		<React.Fragment>
			<Header
				goSettings={() => navigation.navigate('Settings')}
				goHome={() => navigation.navigate('Home')}
			/>
			<Container>
				<Form>
					<Input
						placeholder="Título"
						value={formData.title}
						onChangeText={(text) =>
							setFormData({ ...formData, title: text })}
					/>
					<Input
						placeholder="URL do site"
						value={formData.url}
						onChangeText={(text) =>
							setFormData({ ...formData, url: text })}
					/>
					<Input
						secureTextEntry={true}
						placeholder="Senha"
						value={formData.password}
						onChangeText={(text) =>
							setFormData({ ...formData, password: text })}
					/>
					<Button onPress={handleSubmit}>
						<FeatherIcon
							name="check"
							size={22}
							color="#fff"
							style={{ position: 'relative', top: 2 }}
						/>
						<ButtonText>Salvar</ButtonText>
					</Button>
				</Form>
			</Container>
		</React.Fragment>
	);
};

export default CreateEdit;
