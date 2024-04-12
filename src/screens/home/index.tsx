import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from '../../config/Colors';
import { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { Card, CardProps } from '../../components/card';

interface CardItem {
  id: string;
}

type Props = {
  navigation: any;
};

export const Home = ({ navigation }: Props) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [searchText, setSearchText] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (searchText === '') {
      handleFetchData();
    } else {
      const filteredData = data.filter(item => item.nome.toLowerCase().includes(searchText.toLowerCase()));
      setData(filteredData);
    }
  }, [searchText]);

  const handleFetchData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@fromHook:cadastro');
      const data = jsonValue ? JSON.parse(jsonValue) : [];
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleOrderClick = () => {
    const sortedData = [...data];
    if (order === 'asc') {
      sortedData.sort((a, b) => a.nome.localeCompare(b.nome));
      setOrder('desc');
    } else {
      sortedData.sort((a, b) => b.nome.localeCompare(a.nome));
      setOrder('asc');
    }
    setData(sortedData);
  };

  const handleEdit = (id: any) => {
    navigation.navigate('Usuario', { id: id });
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder='Pesquise uma pessoa'
          placeholderTextColor={Colors.greyMedium}
          value={searchText}
          onChangeText={(text) => handleSearch(text)} />

        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color={Colors.blueDark} />
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
};