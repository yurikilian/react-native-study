import React from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

export default class CartScreen extends React.Component {
    static navigationOptions = {
        title: 'Lojas Renner - Pague Fácil - Sacola de Compras',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Login')}
                    title="Login" />
            </View>
        );
    }
}