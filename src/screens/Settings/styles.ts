import styled from 'styled-components/native';

export const Container = styled.View`
	background: #121212;
	align-items: center;
	height: 100%;
`;

export const Options = styled.View`
	width: 70%;
	margin: 15px;
`;

export const ButtonPIN = styled.TouchableOpacity`
	background: #6c53a2;
	width: 100%;
	height: 50px;
	margin-top: 15px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const ButtonClear = styled.TouchableOpacity`
	background: #ff0000;
	width: 100%;
	height: 50px;
	margin-top: 15px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;
