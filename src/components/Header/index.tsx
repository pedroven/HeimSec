import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import { Container, ButtonsArea, Logo, LogoText } from './styles';

interface IProps {
	goSettings: () => void;
	goHome: () => void;
}

const Header = ({ goSettings, goHome }: IProps) => {
	return (
		<Container>
			<Logo onPress={goHome}>
				<FAIcon
					name="lock"
					size={18}
					color="#fff"
					style={{
						position: 'relative',
						top: 2
					}}
				/>
				<LogoText>Heimsec</LogoText>
			</Logo>
			<ButtonsArea>
				<TouchableOpacity onPress={goSettings}>
					<IoIcon name="settings-outline" size={22} color="#fff" />
				</TouchableOpacity>
			</ButtonsArea>
		</Container>
	);
};

export default Header;
