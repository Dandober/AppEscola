import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import firebase from '../FireBase'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            cargo: ''
        }
    }

    criarNo = () => {
        firebase.database().ref('tipo').set('Aluno')
    }

    cadastrar = () => {

        if (this.state.nome != '' && this.state.cargo != '') {

            let usuarios = firebase.database().ref('Users');
            let chave = usuarios.push().key;

            usuarios.child(chave).set({
                nome: this.state.nome,
                cargo: this.state.cargo
            });

            alert("Cadastrado com sucesso!");

        }

        // Criar um No
        //firebase.database().ref('tipo').set('Cliente');


        firebase.database().ref('Users').child(1).set({
            nome: 'Jose Jose Jose',
            cargo: 'Administrativo'
        })


        //remover um Nó

        firebase.database().ref('tipo').remove();

        //firebase.database().ref('Users').child(id).child('cargo').set('Junior');

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>

                    <View style={styles.box01}>
                        <Text style={{ fontSize: 30, fontWeight: '500' }}>Sistema de Registro</Text>
                    </View>

                    <View style={styles.box01}>
                        <TextInput style={styles.input}
                                   placeholder='Nome do funcionário'
                                   placeholderTextColor='#A9A9A9'
                                   onChangeText={(nome) => { this.setState({ nome }) }} />
                    </View>

                    <View style={styles.box01}>
                        <TextInput style={styles.input}
                                   placeholder='Nome do cargo'
                                   placeholderTextColor='#A9A9A9'
                                   onChangeText={(cargo) => { this.setState({ cargo }) }} />
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.cadastrar} >
                            <Text style={{ fontSize: 25, marginTop: 15 }}>Enviar</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.criarNo} >
                            <Text style={{ fontSize: 25, marginTop: 15 }}>Criar</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.criarNo} >
                            <Text style={{ fontSize: 25, marginTop: 15 }}>Remover</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 280,
        height: 40,
        backgroundColor: '#D3D3D3',
        fontSize: 18,
        padding: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 12

    }
});
