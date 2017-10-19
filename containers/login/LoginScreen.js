import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Lojas Renner - Pague Fácil - Login',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Login!</Text>
                <Button
                    onPress={() => navigate('ItemScanner')}
                    title="Login" />
            </View>
        )
    }
}