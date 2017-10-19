import React from 'React';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Lojas Renner - Pague Fácil',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>HOME</Text>
                <Button
                    onPress={() => navigate('Login')}
                    title="Login" />
            </View>
        );
    }
}