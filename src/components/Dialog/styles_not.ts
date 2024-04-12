import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal:{
      backgroundColor:"#00000099",
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer:{
      backgroundColor:"#f9fafb",
      width:"80%",
      borderRadius:5
    },
    modalHeader:{
      
    },
    bodyText:{
      fontSize:15,
      padding:15,
      color:"#000"},

    title:{
      fontWeight:"bold",
      fontSize:20,
      padding:15,
      color:"#000"
    },
    divider:{
      width:"100%",
      height:1,
      backgroundColor:"lightgray"
    },
    modalBody:{
      backgroundColor:"#fff",
      paddingVertical:20,
      paddingHorizontal:10
    },
    modalFooter:{
    },
    actions:{
      borderRadius:5,
      marginHorizontal:10,
      paddingVertical:10,
      paddingHorizontal:20
    },
    actionText:{
      color:"#fff"
    }
  });
  