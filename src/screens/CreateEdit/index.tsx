import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import { Button, Form, Input, Container, TextButton } from './styles';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

const CreateEdit = ({ navigation }: IProps) => {
	return (
		<React.Fragment>
			<Header
				goSettings={() => navigation.navigate('Settings')}
				goHome={() => navigation.navigate('Home')}
			/>
			<Container>
				<Form>
					<Input placeholder="Título" />
					<Input placeholder="URL do site" />
					<Input secureTextEntry={true} placeholder="Senha" />
					<Button onPress={() => navigation.navigate('Settings')}>
						<FeatherIcon
							name="check"
							size={22}
							color="#fff"
							style={{ position: 'relative', top: 2 }}
						/>
						<TextButton>Salvar</TextButton>
					</Button>
				</Form>
			</Container>
		</React.Fragment>
	);
};

export default CreateEdit;
