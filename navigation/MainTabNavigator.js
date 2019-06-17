import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator,} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Eventos from '../screens/Eventos';
import Perfil from '../screens/Perfil';
import Alunos from '../screens/Alunos'

const HomeStack = createStackNavigator({
    Home: Home,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const EventosStack = createStackNavigator({
    Eventos: Eventos,
});

EventosStack.navigationOptions = {
    tabBarLabel: 'Eventos',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        />
    ),
};

const AlunosStack = createStackNavigator({
    Alunos: Alunos,
});

AlunosStack.navigationOptions = {
    tabBarLabel: 'Alunos',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

const PerfilStack = createStackNavigator({
    Perfil: Perfil,
});

PerfilStack.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-link'}
        />
    ),
};


export default createBottomTabNavigator({
    HomeStack,
    EventosStack,
    AlunosStack,
    PerfilStack,
});

