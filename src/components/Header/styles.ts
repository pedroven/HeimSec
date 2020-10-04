import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: #6c53a2;
	height: 50px;
`;

export const Logo = styled.TouchableOpacity`
	flex-direction: row;
	padding-left: 8px;
`;

export const LogoText = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
	letter-spacing: 1px;
	margin-left: 4px;
`;

export const ButtonsArea = styled.View`
	justify-content: center;
	padding-right: 8px;
`;
