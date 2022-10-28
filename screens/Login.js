import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from '../firebase'

const Login = ({navigation}) => {

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
  
    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style= {{fontSize: 28, fontWeight: 'bold'}} >Bienvenido a ConfBeer!</Text>
            <Text style= {{fontSize: 18, color: 'grey', paddingVertical: 20}} >Por favor, ingrese con su cuenta</Text>
            <View style={styles.log}>
                <View>
                    <TextInput style={styles.input} placeholder='✉️ Email o número de telefono' value={email} onChangeText={text => setEmail(text)}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='🔒 Password                                👁' onChangeText={text => setPassword(text)} secureTextEntry></TextInput>
                </View>
                <Text style= {{fontSize: 17, paddingLeft: '45%' }} >¿Olvidó su password?</Text>
                <TouchableOpacity style={[styles.inicioButton, {backgroundColor: '#FF7600'}]} onPress={handleLogin}>
                    <Text style= {{fontSize: '22', fontWeight: 'bold', color: 'white'}}>Login</Text>
                </TouchableOpacity>
                <Text style= {{fontSize: 18, color: 'grey', paddingTop: 30, paddingBottom: 20}} >O continue con Google</Text>
                <TouchableOpacity style={[styles.inicioButton, {backgroundColor: '#FF5842'}]} onPress={console.log('logeo con google')}>
                    <Text style= {{fontSize: '22', fontWeight: 'bold', color: 'white'}}>G Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style= {{fontSize: 18, color: 'black', paddingTop: 30,}} >No tiene cuenta? <Text style= {{fontSize: 18, fontWeight: 'bold', color: '#FF7600'}} >Ingrese aquí</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        paddingVertical: 100
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
        width: 340,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },
});

export default Login;