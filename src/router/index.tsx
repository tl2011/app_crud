import React from "react" 
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/home";
import { Usuario } from "../screens/cadastro/usuario";

import {MaterialCommunityIcons} from '@expo/vector-icons';
import App from "../screens/busca";



export type RootTabParamList = { 
    Home: undefined;
    Usuario: { id: string};
    App: undefined;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const MyTheme = {
    ...DefaultTheme,
     colors: {
        ...DefaultTheme.colors,
         primary: '#466F70',
         background: '#E8F0F1'
     },
    }

export const Routes = ()=> {
    return(
        <NavigationContainer theme={MyTheme}>
             <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={Home}
                options={
                        {
                            tabBarLabel: 'Usuários',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account-details" color={color} size={36} />
                            ),
                            title: 'Lista de Usuários',
                            headerStyle: {
                                backgroundColor: '#466F70',},
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                  fontWeight: 'bold',
                                },
                                headerTitleAlign: 'center',  
                                
                            
                        }
                        }/>
                <Tab.Screen
                    listeners={({ navigation }) => ({
                        focus: () => {
                          navigation.setParams({ id: undefined });
                        },
                      })}
                    name="Usuario"
                    component={Usuario}
                    options={
                            {
                                tabBarLabel: 'Cadastrar',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />
                             ),
                             
                    title: 'Cadastro',
                    headerStyle: {
                        backgroundColor: '#466F70',},
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',  
                        
                    
                             }
                        }/>
                <Tab.Screen 
                          name="App"
                          component={App}
                          options={
                                  {
                            tabBarLabel: 'Cotação',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="currency-usd" color={color} size={36} />
                            ),
                            title: 'Cotação de moeda',
                            headerStyle: {
                                backgroundColor: '#466F70',},
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                  fontWeight: 'bold',
                                },
                                headerTitleAlign: 'center',  
                                
                            
                        }
                        }/>
             </Tab.Navigator>
      </NavigationContainer>

    )
}