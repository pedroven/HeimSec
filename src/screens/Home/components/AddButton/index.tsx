import React from 'react';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import { Container } from './styles';

interface IProps {
	goCreate: () => void;
}

const AddButton = ({ goCreate }: IProps) => {
	return (
		<Container onPress={goCreate}>
			<FA5Icon name="plus" size={24} color="#fff" />
		</Container>
	);
};

export default AddButton;
