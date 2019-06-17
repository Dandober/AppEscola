import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, KeyboardAvoidingView} from 'react-native';
import firebase from '../auth/Firebase'


/* Classe de login e autenticação do usuário usando o Firebase */
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        }



        //Olheiro FireBase
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Main')
            }
        })
    }


    // Função para logar o usuário e verificação dos principais erros de login
    loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).catch(error => {
            if (error.code === 'auth/wrong-password') {
                alert('Senha incorreta');
            }
            if (error.code === 'auth/invalid-email') {
                alert('Seu e-mail não é valido.');
            }
            if (this.state.email === '' || this.state.senha === '') {
                alert('Preencha os campos vazios');
            }
        });

    };




    /* loginWithoutFirebase = () => {
        this.props.navigation.navigate('Main');
    };
    // Função de reset do password
    goToResetPassScreen = () => {
        this.props.navigation.navigate('Forgotten');
    }

    //Função de redirecionamento para tela de cadastro
    goToSigIn() {
        this.props.navigation.navigate('SingUp');


    //Função de redirecionamento para tela de cadastro
    goToSigIn() {
        this.props.navigation.navigate('SingUp');
    };

    // Função de criar usuários
    createUser = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    onClickRecuperarSenha = () => {
        Alert.alert(
            'Recuperar Senha?',
            'Um link para recuperação de senha será enviado para seu email de cadastro.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelar Pressionado'),
                    style: 'cancel',
                },
                {text: 'Recuperar', onPress: () => console.log('OK Pressionado')},
            ],
            {cancelable: false}
        );
    };
    */

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
                        placeholder="Login"
                        keyboardType="email-address"
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
                        underlineColorAndroid="transparent"
                        onChangeText={senha => this.setState({senha})}
                    />
                </View>
                <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={this.loginFirebase}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.textContainer}
                    onPress={() => {this.props.navigation.navigate('Forgot')}}>
                    <Text>Esqueceu a Senha???</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.textContainer}
                    onPress={() => {this.props.navigation.navigate('SignUp')}}>
                   <Text>Registrar</Text>
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
