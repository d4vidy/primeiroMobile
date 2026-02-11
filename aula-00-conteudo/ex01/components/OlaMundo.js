import React from "react";
import { Text, View } from "react-native";

export default function OlaMundo(props){
    return(
        <View>
            <Text>Olá Mundo!!!</Text>
            <Text>{props.nome}!</Text>
        </View>
    );
}