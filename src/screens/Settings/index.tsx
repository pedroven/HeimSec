import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import Header from '../../components/Header';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

const Settings = ({ navigation }: IProps) => {
	return (
		<React.Fragment>
			<Header
				goSettings={() => navigation.navigate('Settings')}
				goHome={() => navigation.navigate('Home')}
			/>
			<ScrollView>
				<Text>Settings</Text>
			</ScrollView>
		</React.Fragment>
	);
};

export default Settings;
