import React from 'react';
import { Button, HStack, Text, VStack } from 'native-base';
import { ConfirmaExcluirButton, NaoConfirmaButton } from '../button/Button';
import { View } from 'react-native';


interface ExcluirItemDialogProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ExcluirItemDialog: React.FC<ExcluirItemDialogProps> = ({ isVisible, onCancel, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <VStack  bg={'#FAFFF5'} p={7}>
      <Text fontSize={16}  bold>Deseja realmente excluir este item?</Text>
      <HStack  space={2} justifyContent="center">
        <View>
        <NaoConfirmaButton onPress={onCancel}>Cancelar</NaoConfirmaButton>
        <ConfirmaExcluirButton onPress={onConfirm}>Confirmar</ConfirmaExcluirButton>
        </View>



      </HStack>

    </VStack>
  );
};

