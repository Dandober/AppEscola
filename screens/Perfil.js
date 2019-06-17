import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View, KeyboardAvoidingView} from 'react-native';
import firebase from "../auth/Firebase";

const width = Dimensions.get('window').width;

export default class Perfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nome: '',
            turma: '',
            matricula: 0,
            id: ''
        };
    }

    /*   creatNode = () => {
           firebase.database().ref('tipo').set('Aluno')
       }*/


    createUser = () => {
        let usuarios = firebase.database().ref('Alunos');
        let chave = usuarios.push().key;

        usuarios.child(chave).set({
            email: this.state.email,
            nome: this.state.nome,
            turma: this.state.turma,
            matricula: this.state.matricula,
            id: this.state.id

        });
        this.props.navigation.navigate('Main');
        alert("Aluno cadastrado com sucesso!");

    };


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                <View style={{alignItems: 'center', marginBottom: 5}}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://rossendental.com/wp-content/uploads/2013/11/child-smile-yellow.jpg'
                        }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri: 'https://img.icons8.com/clouds/100/000000/new-letter.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="E-mail"
                        secureTextEntry={false}
                        underlineColorAndroid="transparent"
                        autoCapitalize='none'
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri:
                                'https://img.icons8.com/clouds/100/000000/security-lock-yellow.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Nome"
                        secureTextEntry={false}
                        underlineColorAndroid="transparent"
                        onChangeText={nome => this.setState({nome})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri: 'https://img.icons8.com/clouds/100/000000/user.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Turma"
                        secureTextEntry={false}
                        underlineColorAndroid="transparent"
                        onChangeText={turma => this.setState({turma})}
                    />
                </View>
                <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    source={{
                        uri:
                            'https://img.icons8.com/cute-clipart/50/000000/calendar-12.png',
                    }}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Matricula"
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    keyboardType="number-pad"
                    onChangeText={matricula => this.setState({matricula})}
                />
            </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri:
                                'https://img.icons8.com/cute-clipart/50/000000/calendar-12.png',
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="id"
                        secureTextEntry={false}
                        underlineColorAndroid='transparent'
                        keyboardType="number-pad"
                        onChangeText={id => this.setState({id})}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={[{backgroundColor: '#0E6251'}, styles.buttonContainer, styles.loginButton]}
                        onPress={this.createUser}>
                        <Text style={styles.loginText}>Inserir</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[{backgroundColor: '#4A235A'}, styles.buttonContainer, styles.loginButton]}
                    >
                        <Text style={styles.loginText}>Editar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[{backgroundColor: '#C0392B'}, styles.buttonContainer, styles.loginButton]}
                    >
                        <Text style={styles.loginText}>Apagar</Text>
                    </TouchableHighlight>
                </View>

            </KeyboardAvoidingView>

        );
    }
}

Perfil.navigationOptions = {
    title: 'Cadastro de Alunos',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        width: width,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: width,
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
        width: width,
        borderRadius: 30,
    },
    textContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: width,
        borderRadius: 30,
    },
    loginButton: {
        width: width * 0.25,
        margin: 5,
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        paddingBottom: 15,
    },
});
