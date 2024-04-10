import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, CardProps } from '../../components/card';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
 
interface CardItem {
    id: string;
  }
type Props = {
    navigation: any;
};  
 
export const Home = ({navigation}:Props) => {
    //const navigation = useNavigation();
    const [data, setData] = useState<CardProps[]>([]);
    // Adicione uma interface para definir o tipo esperado para o parâmetro `id`
 
  function handleEdit(id:any) {
    navigation.navigate('Usuario', {id:id});
  }
 
  useFocusEffect (useCallback(() => {
    handleFectchData(); //função responsavel por carregar os dados.
},[]));
 
async function handleFectchData (){
    try {
      const jsonValue = await AsyncStorage.getItem('@fromHook:cadastro');
      const data = jsonValue ? JSON.parse(jsonValue): [];
      console.log('Registro armazenado'+data);
      setData(data);
      return jsonValue
    } catch (e) {
      
    }
  };
 
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => handleEdit(item.id)}
          />
        }
      />
     
    </View>
  );
};