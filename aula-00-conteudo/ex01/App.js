import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OlaMundo from "./components/OlaMundo";

export default function App(){
  return(
    <View style={styles.container}>
      <OlaMundo nome = 'David Yehud'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1fb4be',
  },
  text: {
    fontsize: 24,
    fontWeight: 'bold',
  },

});