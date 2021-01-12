import React from 'react';
import { View } from 'react-native';
import PINCode, {
	hasUserSetPinCode,
	resetPinCodeInternalStates,
	deleteUserPinCode
} from '@haskkor/react-native-pincode';
// import { Container } from './styles';

interface IProps {
	status: 'choose' | 'enter' | 'locked' | undefined;
	finishProcess: () => void;
}

const PINCodeScreen = ({ status, finishProcess }: IProps) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#F5FCFF'
			}}
		>
			<PINCode
				status={status}
				touchIDDisabled={true}
				finishProcess={finishProcess}
				colorCircleButtons="#6c53a2"
				numbersButtonOverlayColor="orange"
			/>
		</View>
	);
};

export default PINCodeScreen;
