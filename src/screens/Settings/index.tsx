import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import {
	hasUserSetPinCode,
	deleteUserPinCode
} from '@haskkor/react-native-pincode';

import Header from '../../components/Header';
import PINCodeScreen from '../../components/PINCodeScreen';

import { Container, ButtonClear, ButtonPIN, Options } from './styles';

interface IProps {
	navigation: NavigationScreenProp<any, any>;
}

const Settings = ({ navigation }: IProps) => {
	const [ showPinLock, setShowPinLock ] = useState(false);
	const [ PINCodeStatus, setPINCodeStatus ] = useState<
		'choose' | 'enter' | 'locked' | undefined
	>('choose');

	const showChoosePinLock = () => {
		setShowPinLock(true);
		setPINCodeStatus('choose');
	};

	const finishProcess = async () => {
		const hasPIN = await hasUserSetPinCode();
		if (hasPIN) {
			setShowPinLock(false);
		}
	};

	const clearPin = async () => {
		await deleteUserPinCode();
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
						<Options>
							<ButtonPIN onPress={showChoosePinLock}>
								<Text>Criar novo PIN</Text>
							</ButtonPIN>
							<ButtonClear onPress={clearPin}>
								<Text>Remover PIN Code</Text>
							</ButtonClear>
						</Options>
					</Container>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Settings;
