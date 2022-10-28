import React, { useState, useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { auth } from '../firebase'

const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Conferences")
            }
    })
    
        return unsubscribe
    }, [])
    
      const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
                navigation.replace("Conferences")
            })
            .catch(error => alert(error.message))
      }

    return(
        <View style={styles.container}>
            <Text style= {{fontSize: 28, fontWeight: 'bold', marginBottom: 10}} >Bienvenido a ConfBeer!</Text>
            <Text style= {{fontSize: 18, color: 'black', paddingVertical: 10}} >Por favor, ingrese los datos.</Text>
            <View>
                <TextInput style={styles.input} placeholder='✉️ Email o número de telefono' value={email} onChangeText={text => setEmail(text)}></TextInput>
            </View>
            <View>
                <TextInput style={styles.input} placeholder='🔒 Password                                👁' onChangeText={text => setPassword(text)}></TextInput>
            </View>
            <View style={styles.requisitos}>
                <Text style={styles.textPassword}>Tu contraseña debe contener:</Text>
                <Text style={styles.requisitoPassword}>✔️ Tener al menos 6 caracteres.</Text>
                <Text style={styles.requisitoPassword}>✔️ Conetener números.</Text>
            </View>
            <TouchableOpacity style={styles.inicioButton} onPress={handleSignUp}>
                <Text style= {{fontSize: '22', fontWeight: 'bold', color: 'white'}}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAF7A6',
        alignItems: 'center',
        justifyContent: 'top',
        paddingVertical: 140,
    },
    log: {
        backgroundColor: 'white',
        width: 410,
        height: 500,
        padding: 20,
        alignItems: 'center',
        fontSize: 54
    },
    input: {
        width: 340,
        height: 60,
        borderColor: '#D0DBEA',
        borderWidth: 2,
        borderRadius: 50,
        padding: 25,
        marginVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        fontSize: 18
    },
    inicioButton: {
        width: 200,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#FF7600'
    },
    inicioButton2: {
        width: 150,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 180,
        right: '30%'
    },
    requisitos: {
        backgroundColor: '#DAF7A6',
        width: 310,
        height:100
    },
    textPassword:{
        fontSize:22,
        paddingBottom: 10
    },
    requisitoPassword: {
        fontSize: 18,
        paddingBottom: 5
    }
});

export default Register;

