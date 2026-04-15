import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screen/HomeScreen';

import ModalFade from './Screen/Modals/ModalFade.js';
import ModalNone from './Screen/Modals/ModalNone.js';
import ModalSlide from './Screen/Modals/ModalSlide.js';

import ScrollViewScreen from './Screen/Scroll/ScrollView.js';
import FlatListScreen from './Screen/Scroll/FlatList.js';
import SectionListScreen from './Screen/Scroll/SectionList.js';

import FormScreen from './componentes/FormScreen.js';
import ListScreen from './componentes/ListScreen.js'; 

import LoginScreen from './componentes/LoginScreen.js';
import RegisterScreen from './componentes/RegisterScreen.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator1(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fade" component={ModalFade} />
      <Tab.Screen name="None" component={ModalNone} />
      <Tab.Screen name="Slide" component={ModalSlide} />
    </Tab.Navigator>
  );
}

function TabNavigator2(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScrollView" component={ScrollViewScreen} />
      <Tab.Screen name="FlatList" component={FlatListScreen} />
      <Tab.Screen name="SectionList" component={SectionListScreen} />
    </Tab.Navigator>
  );
}

function TabNavigator3(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cadastrar aluguel" component={FormScreen} />
      <Tab.Screen name="Lista de Carros" component={ListScreen} />
    </Tab.Navigator>
  );
}

function TelaAtividade() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Bem-Vindo" component={HomeScreen} />
      <Drawer.Screen name="Tela Modal" component={TabNavigator1} />
      <Drawer.Screen name="Tela Scroll" component={TabNavigator2} />
      <Drawer.Screen name="Tela Formulário" component={TabNavigator3} />
    </Drawer.Navigator>
  )
}



export default function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={TelaAtividade} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}









