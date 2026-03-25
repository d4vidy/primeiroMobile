import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenHome from './Screen/HomeScreen';
import CustomModalScreen from './components/Evento1.js';
import Screen2 from './components/Evento2';
import ModalFade from './Screen/Modals/ModalFade.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



export default function ModalDrawerNavigator(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Modal">
        <Drawer.Screen name="Home" component={ScreenHome} />
        <Drawer.Screen name="Tela Modal" component={ModalFade} />
        <Drawer.Screen name="Screen 2" component={Screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
