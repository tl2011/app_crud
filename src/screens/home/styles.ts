import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';
 
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        backgroundColor: '#E8F0F1',
        flex: 1,
        width: '100%'
    },
    listContent:{
        padding:24,
        paddingBottom: 80,
    },
    searchArea : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    input : {
        flex:1,
        height: 50,
        backgroundColor: "#FFFFFF",
        margin:30,
        borderRadius: 5,
        fontSize: 15,
        paddingLeft: 15,
        paddingRight: 15,
        color: Colors.blueDark
    },
    orderButton: {
        width:32,
        marginRight:40,
    },
    
})