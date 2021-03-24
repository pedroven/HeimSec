import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { RouteProp } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';

import Header from '../../components/Header';

import { Button, Form, Input, Container, ButtonText } from './styles';

interface IFormData {
	id?: string;
	title: string;
	url: string;
	password: string;
}
interface IProps {
	navigation: NavigationScreenProp<any, any>;
	route: RouteProp<any, any>;
}

const CreateEdit = ({ navigation, route }: IProps) => {
	const { item }: any = route.params;
	const [ formData, setFormData ] = useState<IFormData>(
		(item as IFormData) || {
			title: '',
			url: '',
			password: ''
		}
	);
	const [ confirmationPassword, setConfirmationPassword ] = useState<string>(
		''
	);

	const isValidForm = (data: IFormData) => {
		if (data.title && data.password) {
			return true;
		}
		return false;
	};

	const createItem = async (items: IFormData[], item: IFormData) => {
		const id: string = uuid.v4();
		items.push({ ...item, id: id });
		await AsyncStorage.setItem('Items', JSON.stringify(items));
	};

	const editItem = async (items: IFormData[], updatedItem: IFormData) => {
		let newItems = items.map(
			(item: IFormData) =>
				item.id === updatedItem.id ? (item = updatedItem) : item
		);
		await AsyncStorage.setItem('Items', JSON.stringify(newItems));
	};

	const handleSubmit = async () => {
		try {
			if (route.params) {
				if (!isValidForm(formData)) {
					Alert.alert('Dados do formulário estão inválidos');
					return;
				}
				if (route.params.actionType === 'create') {
					const allItems = await AsyncStorage.getItem('Items');
					if (allItems === null) {
						let newItems: IFormData[] = [];
						await createItem(newItems, formData);
					} else {
						let items = JSON.parse(allItems);
						await createItem(items, formData);
					}
					navigation.navigate('Home');
				}
				if (route.params.actionType === 'edit') {
					if (formData.password !== confirmationPassword) {
						Alert.alert('Senhas diferentes');
					} else {
						let allItems = await AsyncStorage.getItem('Items');
						if (allItems) {
							let parsedItems: IFormData[] = JSON.parse(allItems);
							await editItem(parsedItems, formData);
						}
						navigation.navigate('Home');
					}
				}
			}
		} catch (e) {
			Alert.alert(e);
		}
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
						placeholder="Site"
						value={formData.url}
						onChangeText={(text) =>
							setFormData({ ...formData, url: text })}
					/>
					<Input
						secureTextEntry={true}
						placeholder="Senha"
						value={formData.password}
						onChangeText={(text) => {
							if (formData.password !== text)
								setFormData({ ...formData, password: text });
						}}
					/>
					{route.params &&
					route.params.actionType === 'edit' && (
						<Input
							secureTextEntry={true}
							placeholder="Confirmar Senha"
							value={confirmationPassword}
							onChangeText={(text) =>
								setConfirmationPassword(text)}
						/>
					)}
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
