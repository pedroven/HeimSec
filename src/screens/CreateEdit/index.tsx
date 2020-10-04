import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import Header from '../../components/Header';

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
			<ScrollView>
				<Text>CreateEdit</Text>
				<Button
					title="Go to Create"
					onPress={() => navigation.navigate('CreateEdit')}
				/>
				<Button
					title="Go to Settings"
					onPress={() => navigation.navigate('Settings')}
				/>
			</ScrollView>
		</React.Fragment>
	);
};

export default CreateEdit;
