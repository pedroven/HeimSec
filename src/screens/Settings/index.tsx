import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import Header from '../../components/Header';

import { Container, ButtonClear, ButtonPIN, Options } from './styles';

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
			<Container>
				<Options>
					<ButtonPIN />
					<ButtonClear />
				</Options>
			</Container>
		</React.Fragment>
	);
};

export default Settings;
