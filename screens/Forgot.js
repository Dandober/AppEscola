import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, KeyboardAvoidingView} from 'react-native';
import firebase from '../auth/Firebase'

/* Classe de Criação de Usuário */
export default class Forgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',

        };

        this.sendEmail = this.sendEmail.bind(this)

    }

    sendEmail() {

        let auth = firebase.auth();

        auth.sendPasswordResetEmail(this.state.email).then(function () {
            alert('Seu email foi enviado com sucesso')
        }).catch(function(error){
            let erroCode = erro.code;

            if(errorCode == 'auth/invalid-email'){
                alert('Seu email não é valido');
            }
        })
    }




    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://img.icons8.com/clouds/100/000000/employee-card.png'
                        }}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri: 'https://img.icons8.com/cotton/64/000000/letter.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        value={this.state.email}
                        autoCapitalize='none'
                        underlineColorAndroid="transparent"
                        onChangeText={email => this.setState({email})}
                    />
                </View>
                <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={this.sendEmail}>
                    <Text style={styles.loginText}>Recuperar Senha</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.textContainer}
                    onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text>Voltar</Text>
                </TouchableHighlight>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F4F4',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    textContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#884EA0',
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 100,
        marginBottom: 40,
        justifyContent: 'center',
    },
});
