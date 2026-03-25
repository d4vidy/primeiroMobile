import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenHome from './Screen/HomeScreen';
import Screen2 from './components/Evento2';

import ModalFade from './Screen/Modals/ModalFade.js';
import ModalNone from './Screen/Modals/ModalNone.js';
import ModalSlide from './Screen/Modals/ModalSlide.js';

import ScrollViewScreen from './Screen/Scroll/ScrollView.js';
import FlatListScreen from './Screen/Scroll/FlatList.js';
import SectionListScreen from './Screen/Scroll/SectionList.js';

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

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ScreenHome} />
        <Drawer.Screen name="Tela Modal" component={TabNavigator1} />
        <Drawer.Screen name="Tela Scroll" component={TabNavigator2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}









