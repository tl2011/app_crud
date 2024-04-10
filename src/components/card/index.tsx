import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Container, Content, Email, Nome, Password, User } from './styles';
import styled from 'styled-components/native';

export type CardProps = {
    id: any;
    nome: string;
    email: string;
    senha: string;
    confirmaSenha: string;
}
type Props = {
  data: CardProps;
  onPress: () => void;
}
 
export function Card({ data, onPress }: Props) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  console.log(data.nome)
 
  function togglePasswordIsVisible() {
    setPasswordIsVisible(prevState => !prevState);
  }
 
  return (
    <Container>
       <Content>
        <View>
          <Nome>
            {data.nome}
          </Nome>
          <Email>
            {data.email}
          </Email>
          
          {passwordIsVisible ? (
            <Password>
              {data.senha}
            </Password>
          ) : (
            <User>
            {'********'}
          </User>
        )}
    
  
    <TouchableOpacity         
      onPress={togglePasswordIsVisible}>
        <MaterialIcons
          name={passwordIsVisible ? "visibility" : "visibility-off"}
          size={30}
          color="#A0DFE0"
          
        />
      </TouchableOpacity>

       {/* Espaço horizontal */}
       <View style={{ width: 10 }} />
 

    
      </View>
    </Content>
    <TouchableOpacity>
      <Button onPress={onPress}>
        <Icon name="edit" size={30} color="#A0DFE0" />
      </Button>
    </TouchableOpacity>
  </Container>
  );
}