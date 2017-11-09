import React from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import { NavigationActions } from 'react-navigation'


import { BarCodeScanner, Permissions } from 'expo';


export default class ItemScannerScreen extends React.Component {
    static navigationOptions = {
        title: 'Lojas Renner - Pague Fácil - Scanner',
    };

    state = {
        hasCameraPermission: null,
    }


    goToLogin() {


        
        const resetAction = NavigationActions.reset({
            index: 2,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({ routeName: 'Login' }),
                NavigationActions.navigate({ routeName: 'Cart' }),
            ]
        })
        this.props.navigation.dispatch(resetAction)
        

        //this.props.navigation.navigate('ItemScanner');
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { navigate } = this.props.navigation;

        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {

            return (
                <View style={{ flex: 1 }} >
                    <BarCodeScanner
                        onBarCodeRead={this._handleBarCodeRead}
                        style={StyleSheet.absoluteFill}
                    />
                    <Button
                        onPress={() => this.goToLogin()}
                        title="Login" />
                </View>
            );
        }
    }

    _handleBarCodeRead = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }


    componentWillUnmount() {
        console.log('unmounted')
    }
}