import styled from 'styled-components/native';

export const Container = styled.View`
    background: #121212;
    align-items: center;
    height: 100%;
`;

export const Form = styled.View`
  width: 70%;
  margin: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background: #ccc;
  margin-top: 15px;
  border-radius: 8px;
  padding: 0 8px;
`;

export const Button = styled.TouchableOpacity`
  background: #6c53a2;
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 3px;
`;
