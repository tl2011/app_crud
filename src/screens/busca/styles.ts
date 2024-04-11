import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${Colors.blueLight};
  padding-top: 40px;
`;

export const AreaMoeda = styled.View`
  width: 90%;
  background-color: ${Colors.greyLight};
  padding-top: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  margin-bottom: 1px;
`;

export const TextMoeda = styled.Text`
  font-size: 15px;
  color: ${Colors.black};
  padding-top: 5px;
  padding-left: 5px;
`;

export const AreaValor = styled.View`
  width: 90%;
  background-color: ${Colors.greyLight};
  padding-bottom: 9px;
  padding-top: 9px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  height: 45px;
  font-size: 20px;
  margin-top: 8px;
  color: ${Colors.black};
`;

export const BtnArea = styled.TouchableOpacity`
  width: 90%;
  background-color: ${Colors.blue};
  height: 45px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
  font-weight: bold;
`;

export const AreaResultado = styled.View`
  width: 90%;
  background-color: ${Colors.blueDark};
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 30px;
  border-bottom-right-radius: 4px;
`;

export const ValorConvertido = styled.Text`
  font-size: 39px;
  font-weight: bold;
  color: ${Colors.blueMedium};
`;

export const ViewLoading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;