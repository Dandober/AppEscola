import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, KeyboardAvoidingView} from 'react-native';
import firebase from '../auth/Firebase'

/* Classe de Criação de Usuário */
export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            firstName: '',
            lastName: ''
        };

        this.goToSignIn = this.goToSignIn.bind(this)

    }

    goToSignIn() {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).catch(function (error) {

            let errorCode = error.code;

            if (errorCode == 'auth/weak-password') {
                alert('A senha necessita de 6 caracteres ou mais.')
            }
            if (errorCode == 'auth/invalid-email') {
                alert('Seu e-mail não é valido.')

            } if (errorCode == 'auth/email-already-exists') {
                alert('O e-mail fornecido já está em uso por outro usuário.')

            }
            else {
                alert('Cadastrado com Sucesso')

            }

        });


        this.props.navigation.navigate('Main');
        alert('Cadastrado com Sucesso')


    }

    componentWillUnmount() {

        let user = firebase.auth().currentUser

        if (user) {
            firebase.database().ref('Users/' + user.uid).set({

                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,



            })
        }
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
                            uri: 'https://img.icons8.com/cotton/64/000000/user.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Nome"
                        secureTextEntry={false}
                        underlineColorAndroid="transparent"
                        onChangeText={firstName => this.setState({firstName})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri: 'https://img.icons8.com/cotton/64/000000/user.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Sobrenome"
                        secureTextEntry={false}
                        underlineColorAndroid="transparent"
                        onChangeText={lastName => this.setState({lastName})}
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
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri: 'https://img.icons8.com/cotton/64/000000/lock.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={this.state.senha}
                        underlineColorAndroid="transparent"
                        onChangeText={senha => this.setState({senha})}
                    />
                </View>

                <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={this.goToSignIn}>
                    <Text style={styles.loginText}>Cadastrar</Text>
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
