import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from "react-native-uuid";
import {yupResolver} from "@hookform/resolvers/yup";
import { schemaRegister, FormDataProps } from "../Model/UsuarioModel";

export const Usuario = ({route, navigation}: UsuarioRouterProp) =>{
    const {control, handleSubmit, reset, setValue, formState:{errors}} = useForm<FormDataProps>({
        resolver: yupResolver(schemaRegister) as any
      }
      );

      const [loading, setLoading] = useState(true);
      const [seacherID, setSeacherID] = useState(true);
      const [showDeleteDialog, setShowDeleteDialog] = useState(false);
      const isEditing = !!route?.params?.id;

  async function handlerRegister(data:FormDataProps){
    data.id = uuid.v4().toString();
    //console.log(data);
    try{
        const responseData = await AsyncStorage.getItem('@fromHook:cadastro');
        const dbData = responseData ? JSON.parse(responseData): [];
        const previewData = [...dbData, data];
        
        await AsyncStorage.setItem('@fromHook:cadastro' ,JSON.stringify(previewData));
        
        return 'Cadastro realizado com sucesso!'
       
    }catch (err) {
        return 'Cadastro errado!'
    }
    
        //Toast.showSuccess('Cadastro realizado com sucesso!')

        //reset();
        //handleList();
  }

  async function handlerAlterRegister(data:FormDataProps){
    try{
      setLoading(true);
        const responseData = await AsyncStorage.getItem('@fromHook:cadastro');
        const dbData: FormDataProps [] = responseData ? JSON.parse(responseData): [];

        const indexToRemove = dbData.findIndex(item => item.id === data.id)

        if (indexToRemove !== -1){
          dbData.splice(indexToRemove, 1);
          const previewData = [...dbData, data];
          await AsyncStorage.setItem ('@fromHook:cadastro' ,JSON.stringify(previewData));
          Toast.showSuccess('Cadastro alterado com sucesso!')
          setLoading(false)
          setSeacherID(false);
          reset();

          handleList();

        }else{
          Toast.show('Registro não localizado.');
        }      
    }catch (err) {
      setLoading(false)
      console.log(err);
      
    }
  }