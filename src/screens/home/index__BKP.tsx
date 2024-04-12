import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
//import ListItem from '../../components/ListItem';
//import results from './results';
import { Card, CardProps } from '../../components/card';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from '../../config/Colors';

 
interface CardItem {
    id: string;
  }
type Props = {
    navigation: any;
};  
 
export const Home = ({navigation}:Props) => {
    //const navigation = useNavigation();
    const [data, setData] = useState<CardProps[]>([]);
    const [searchText, setSearchText] = useState('');
    

    // useEffect (()=>{
    //   if(searchText === '') {
    //     setData(data);
    //   } else {
    //     setData(
    //       data.filter(item=> {
    //       if(item.nome.indexOf(searchText) > -1) {
    //         return true;
    //         } else {
    //           return false;
    //         }
    //     })
    //   );
    // }
    // }, [searchText]);

    // const handleOrderClick = () => {};
 
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
      const sortedData = sort((a, b) => a.nome.localeCompare(b.nome), data);
      console.log('Registro armazenado'+data);
      setData(data);
      return jsonValue
    } catch (e) {
      
    }
  };
 
 
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder='Pesquise uma pessoa'
          placeholderTextColor={Colors.black}
          value={searchText}
          onChangeText={(t) => setSearchText(t)} />

        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
              <MaterialCommunityIcons
              name="order-alphabetical-ascending"
              size={32}
              color={Colors.black}/>
        </TouchableOpacity>

      </View>


    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
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
     
    {/* </View> */}
    </SafeAreaView>
  );
};

function sort(arg0: (a: any, b: any) => any, data: any) {
  throw new Error('Function not implemented.');
}
