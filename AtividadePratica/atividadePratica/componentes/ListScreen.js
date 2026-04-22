import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export default function ListScreen() {
    const [rentals, setRentals] = useState([]);
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        const fetchRentals = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'aluguel'));
                const rentalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setRentals(rentalsData);
            } catch (error) {
                console.error('Erro ao buscar aluguéis:', error);
            }
        };
        fetchRentals();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {rentals.map((rental) => (
                <TouchableOpacity
                    key={rental.id}
                    style={styles.item}
                    onPress={() => setExpanded(expanded === rental.id ? null : rental.id)}
                >
                    <Text style={styles.text}>Carro: {rental.carName}</Text>
                    {expanded === rental.id && (
                        <View style={styles.details}>
                            <Text style={styles.detailText}>Cliente: {rental.clientName}</Text>
                            <Text style={styles.detailText}>Valor: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(rental.valor))}</Text>
                            <Text style={styles.detailText}>Data: {rental.rentDate}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#bdbaba',
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    detailText: {
        fontSize: 14,
        marginBottom: 5,
    },
});