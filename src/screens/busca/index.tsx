import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';


import Colors from '../../config/Colors';
import api from '../../components/services/api';
import { styles } from './styles';

import Picker from '../../components/Picker/indext';

const App = () => {
  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaBValor, setMoedaBValor] = useState(0);

  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all');

      let arrayMoedas: any = [];

      Object.keys(response.data).map(key => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });

      setMoedas(arrayMoedas);
      setLoading(false);
    }

    loadMoedas();
  }, []);

  async function converter() {
    if (moedaSelecionada === null || valorMoeda === 0) {
      Alert.alert(
        'Por favor selecione uma moeda ou digite o valor que deseja converter.',
      );
      return;
    }

    const response = await api.get(`all/${moedaSelecionada}-BRL`);

    let resultado: any =
      response.data[moedaSelecionada].ask * parseFloat(moedaBValor);
    // console.log(response.data[moedaSelecionada].ask);

    setValorConvertido(resultado.toFixed(2));
    setMoedaBValor(valorMoeda);
    Keyboard.dismiss();
  }

  if (loading) {
    return (
      <View style={styles.viewLoading}>
        <ActivityIndicator color={Colors.white} size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.textMoeda}>Selecione sua moeda</Text>
          <Picker
            moedas={moedas}
            onChange={(moeda) => setMoedaSelecionada(moeda)}
          />
        </View>

        <View style={styles.areaValor}>
          <Text style={styles.textMoeda}>
            Digite um valor para converter em (R$)
          </Text>
          <TextInput
            placeholder="EX:. 150"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(valor: any) => {
              setValorMoeda(valor);
            }}
          />
        </View>
        <TouchableOpacity style={styles.btnArea} onPress={converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>
              {valorMoeda} {moedaSelecionada}
            </Text>
            <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}>
              Corresponde a
            </Text>
            <Text style={styles.valorConvertido}>R$ {valorConvertido}</Text>
          </View>
        )}
      </View>
    );
  }
};



export default App;