import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/home/HomeScreen';
import LoginScreen from './containers/login/LoginScreen';
import LocalizationScreen from './containers/localization/LocalizationScreen';
import CartScreen from './containers/cart/CartScreen';
import ItemScannerScreen from './containers/item-scanner/ItemScannerScreen';

const appTitle = 'Lojas Renner - Pague Fácil';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Localization: { screen: LocalizationScreen },
  Cart: { screen: CartScreen },
  ItemScanner: { screen: ItemScannerScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}