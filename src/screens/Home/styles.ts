import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		alignItems: 'center'
	}
})`
	background: #121212;
`;

export const TitleArea = styled.View`
	width: 70%;
	height: 40px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
	margin-top: 4px;
`;

export const Card = styled.TouchableOpacity`
	width: 70%;
	height: 100px;
	border-radius: 8px;
	background: #282828;
	padding: 10px;
	position: relative;
	margin-bottom: 20px;
`;

export const CardText = styled.Text`
	color: #fff;
	font-size: 16px;
	margin-bottom: 5px;
`;

export const DeleteButton = styled.TouchableOpacity`
	position: absolute;
	right: 10px;
	top: 10px;
`;
