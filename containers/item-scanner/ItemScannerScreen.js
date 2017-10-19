import React from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

export default class ItemScannerScreen extends React.Component {
    static navigationOptions = {
        title: 'Lojas Renner - Pague Fácil - Scanner',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Scanner</Text>
                <Button
                    onPress={() => navigate('Home')}
                    title="Home" />
            </View>
        );
    }
}