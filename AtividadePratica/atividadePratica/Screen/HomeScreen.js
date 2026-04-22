import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';

export default function HomeScreen({ navigation }) {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                if (auth.currentUser) {
                    const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
                    if (userDoc.exists()) {
                        setUserName(userDoc.data().name);
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar nome do usuário:', error);
            }
        };
        fetchUserName();
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigation.replace('Login');
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
    <View style={styles.container}>
      {/* Pegamos o email do usuário logado dinamicamente via auth.currentUser */}
      <Text style={styles.welcomeText}>Bem-vindo, {userName}!</Text>
      <Text style={styles.emailText}>{auth.currentUser?.email}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  emailText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#dc3545', // Cor vermelha para indicar saída
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});