import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenHome = () => {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao aplicativo. 
            Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenHome;
