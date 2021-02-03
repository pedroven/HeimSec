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
				colorPassword="#6c53a2"
				colorPasswordEmpty="#6c53a2"
				numbersButtonOverlayColor="#fff"
				stylePinCodeButtonNumber="#fff"
				titleEnter="Digite seu PIN code"
				titleChoose="Crie aqui seu PIN code"
				subtitleChoose="para manter suas informações seguras"
				titleConfirm="Confirme seu PIN code"
				titleAttemptFailed="PIN code incorreto"
				subtitleError="por favor, tente novamente"
			/>
		</View>
	);
};

export default PINCodeScreen;
