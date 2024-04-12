import React from 'react';
import { VStack, Text, HStack, View, Center, Button } from 'native-base';
//import { AlterarButton, ExcluirButton } from '../button/Button';
//import { Container, Button, ButtonText } from './styles';
//import { Modal } from 'react-native-paper';


interface ExcluirItemDialogProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ExcluirItemDialog: React.FC<ExcluirItemDialogProps> = ({ isVisible, onCancel, onConfirm }) => {
  if (!isVisible) return null;


  return (

    <VStack  bg={'#FAFFF5'} p={7}>
      <Text fontSize={16} paddingBottom={10}>Confirma a exclusão deste usuário?</Text>
      <HStack space={5} justifyContent="center">
        <Button  rounded="md" shadow={3} h={20} w={100} bgColor={'#FCA53A'} onPress={onCancel}>Cancelar</Button>
        <Button  rounded="md" shadow={3} h={20} w={100} bgColor={'#FC3F3A'} onPress={onConfirm}>Confirmar</Button>

      </HStack>

    </VStack>
  );
};

