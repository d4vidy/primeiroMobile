import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ComponenteExterno from "./components/ComponeteExterno";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <ComponenteExterno />
          </View>
          
          <View style={styles.middleSection}>
            <Greeting nome="Miguel" />
            <Greeting nome="Carlos" />
            <Greeting nome="Junior" />
          </View>
          
          <View style={styles.bottomSection}>
            <Counter />
          </View>
          

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: '20',
    backgroundColor: '#843086'
  },
  headerSection:{
    width: '100%'
  },
  middleSection:{
    alignItems:  'center'
  },
  bottomSection:{
    alignItems: 'center'
  }
})