import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp'
import Forgot from '../screens/Forgot'

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      Login: Login,
      SignUp: SignUp,
      Forgot: Forgot
    },

    {
      initialRouteName: 'Login',
    }
  )
);
