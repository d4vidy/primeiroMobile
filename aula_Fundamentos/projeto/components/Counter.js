import { useState } from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <View>
            <Text style={styles.count}>Você clicou {count} vezes.</Text>
            <Button title='Clique aqui' onPress={() => setCount(count+1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    count: {
        fontSize: 18,
        margin: 3,
        color: '#dfdde2'
    }
})