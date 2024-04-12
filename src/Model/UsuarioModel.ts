import * as yup from "yup";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { RootTabParamList } from '../router/'

export type FormDataProps = {
  id: string;
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
}

export type UsuarioRouterProp = BottomTabScreenProps<RootTabParamList, 'Usuario'>;

export const schemaRegister = yup.object({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').min(6, 'Informe no mínimo 6 digitos').email('E-mail informado não é válido'),
  senha: yup.string().required('Senha obrigatória').min(3, 'Informe no mínimo 3 digitos').max(10, 'Informe no máximo 6 digitos'),
  confirmaSenha:
      yup.string()
          .required('Confirmação de senha obrigatória')
          .oneOf([yup.ref('senha')], 'As senhas devem coincidir'),
});