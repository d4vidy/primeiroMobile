import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenHome from './Screen/HomeScreen';
import CustomModalScreen from './components/Evento1.js';
import Screen2 from './components/Evento2';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScreenHome" component={ScreenHome} />
      <Tab.Screen name="TelaModal" component={CustomModalScreen} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ScreenHome} />
        <Drawer.Screen name="Tela Modal" component={CustomModalScreen} />
        <Drawer.Screen name="Screen 2" component={Screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}









