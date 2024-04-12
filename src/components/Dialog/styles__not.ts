import styled from 'styled-components/native';
import Colors from '../../config/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  margin: 10px;
  background-color: ${Colors.blue};
`;

export const ButtonText = styled.Text`
  color: ${Colors.black};
`;

// export const ModalContainer = styled.View`
//   background-color: ${Colors.blueDark};
//   padding: 20px;
//   border-radius: 10px;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.7); /* adiciona um fundo escuro transparente */
// `;

export const TextV = styled.View`
  font-size: 18px;
  margin-bottom: 20px;
`;
