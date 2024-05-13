import { firebase } from '../../services/firebaseConfig'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import React from 'react'
import styles from './style'

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("null")

    function validate(){
        if(email == ""){
            setErrorLogin("Informe um e-mail!")
        }else if(password == ""){
            setErrorLogin("Informe uma senha!")
        }else{
            setErrorLogin(null)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo_pra_fazer.png')} />

            { errorLogin != null && (
                <Text style={styles.alert}>{ errorLogin }</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry= {true}
            />

            <TouchableOpacity style={styles.button} 
            onPress={validate}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonCreate} onPress={() => navigation.navigate('CreateUser')}
            >
                <Text style={styles.buttonCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}