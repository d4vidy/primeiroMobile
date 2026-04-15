//import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

const FormScreen = () => {
    const [carName, setCarName] = useState('');
    const [clientName, setClientName] = useState('');
    const [valor, setValor] = useState('');
    const [rentDate, setRentDate] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSaveRental = async () => {
        if (!carName || !clientName || !valor || !rentDate) {
            setModalMessage('Por favor, preencha todos os campos.');
            setIsSuccess(false);
            setModalVisible(true);
            return;
        }
        

        try {
            await addDoc(collection(db, 'aluguel'), {
                carName: carName,
                clientName: clientName,
                valor: valor,
                rentDate: rentDate,
                createdAt: new Date().toISOString()
            });

            setModalMessage('Cadastro realizado com sucesso!');
            setIsSuccess(true);
            setModalVisible(true);
        } catch (error) {
            setModalMessage('Erro ao cadastrar: ' + error.message);
            setIsSuccess(false);
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        if (isSuccess) {
            setCarName('');
            setClientName('');
            setValor('');
            setRentDate('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrar novo aluguel</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do carro"
                value={carName}
                onChangeText={setCarName}
            />

            <TextInput
                style={styles.input}
                placeholder="Data de aluguel (DD/MM/AAAA)"
                value={rentDate}
                onChangeText={setRentDate}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Nome do cliente"
                value={clientName}
                onChangeText={setClientName}
            />

            <TextInput
                style={styles.input}
                placeholder="Valor do aluguel"
                value={valor}
                onChangeText={setValor}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleSaveRental}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={[styles.modalText, { color: isSuccess ? '#28a745' : '#dc3545' }]}>
                            {isSuccess ? 'Sucesso' : 'Erro'}
                        </Text>
                        <Text style={styles.modalMessage}>{modalMessage}</Text>

                        <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FormScreen;