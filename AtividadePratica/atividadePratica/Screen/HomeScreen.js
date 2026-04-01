import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../Styles/HomeStyle';

const ScreenHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao aplicativo. 
            Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
        </Text>
    </View>
  );
};



export default ScreenHome;