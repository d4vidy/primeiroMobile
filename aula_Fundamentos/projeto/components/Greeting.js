import { Text, StyleSheet } from "react-native";

export default function Greeting(props){
    const {nome} = props
    return <Text>Olá {nome}!</Text>
}

