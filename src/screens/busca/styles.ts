import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.blueLight,
    paddingTop: 40,
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: Colors.greyLight,
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1,
  },
  textMoeda: {
    fontSize: 15,
    color: Colors.black,
    paddingTop: 5,
    paddingLeft: 5,
  },
  areaValor: {
    width: '90%',
    backgroundColor: Colors.greyLight,
    paddingBottom: 9,
    paddingTop: 9,
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 8,
    color: Colors.black,
  },
  btnArea: {
    width: '90%',
    backgroundColor: Colors.blue,
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
  },
  areaResultado: {
    width: '90%',
    backgroundColor: Colors.white,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  valorConvertido: {
    fontSize: 39,
    fontWeight: 'bold',
    color: Colors.black,
  },
  viewLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});