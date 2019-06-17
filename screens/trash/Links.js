import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';

export default class Links extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            megaSena: []
        }
    }

    gerar = () => {
        let i;
        let array = []
        for (i = 0; i < 6; i++) {
            let num = Math.floor((Math.random() * 65) + 1)
            array[i] = num
        }

        this.setState({
            megaSena: array
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={this.gerar}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text>O número da Mega Sena é: {this.state.megaSena[0]}
                    - {this.state.megaSena[1]} - {this.state.megaSena[2]}
                    - {this.state.megaSena[3]} - {this.state.megaSena[4]} - {this.state.megaSena[5]} </Text>
            </View>
        );
    }
}

Links.navigationOptions = {
    title: 'Links',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F4F4',
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
    loginButton: {
        backgroundColor: '#884EA0',
    },
});
