import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

// import { Container } from './styles';
interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

const Home = ({ navigation }: IProps) => {
	return (
		<View>
			<Text>Home</Text>
			<Button
				title="Go to Create"
				onPress={() => navigation.navigate('CreateEdit')}
			/>
			<Button
				title="Go to Settings"
				onPress={() => navigation.navigate('Settings')}
			/>
		</View>
	);
};

export default Home;
