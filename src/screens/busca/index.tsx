import React, {useState, useEffect} from 'react';
import { Text,  View,  TextInput,  TouchableOpacity,
  ActivityIndicator,  Alert,  Keyboard} from 'react-native';
import Colors from '../../config/Colors';
import api from '../../components/services/api';
import { Container, AreaMoeda, TextMoeda, AreaValor, Input, BtnArea, BtnText, AreaResultado, ValorConvertido, ViewLoading  } from './styles'
import Picker from '../../components/Picker/indext';
import { ConverterButton } from '../../components/button/Button';

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
      <ViewLoading>
        <ActivityIndicator color={Colors.white} size={45} />
      </ViewLoading>
    );
  } else {
    return (
      <Container>
      <AreaMoeda>
        <TextMoeda>Selecione sua moeda</TextMoeda>
        <Picker
          moedas={moedas}
          onChange={(moeda) => setMoedaSelecionada(moeda)}
        />
      </AreaMoeda>

      <AreaValor style={{ marginBottom: 30 }}>
          <TextMoeda>Digite um valor para converter em (R$)</TextMoeda>
          <Input
            placeholder="EX:. 150"
            keyboardType="numeric"
            onChangeText={(valor) => {
              setValorMoeda(valor);
            }}
          />
        </AreaValor>
          <ConverterButton onPress={converter}>
          <BtnText>Converter</BtnText>
        </ConverterButton>

        {valorConvertido !== 0 && (
          <AreaResultado>
            <ValorConvertido>
              {valorMoeda} {moedaSelecionada}
            </ValorConvertido>
            <ValorConvertido style={{ fontSize: 18, margin: 10 }}>
              Corresponde a
            </ValorConvertido>
            <ValorConvertido>R$ {valorConvertido}</ValorConvertido>
          </AreaResultado>
        )}
      </Container>
    );
  }
};



export default App;