import React from 'React';
import {
    View,
    Text,
    Button, StatusBar

} from 'react-native';

export default class HomeScreen extends React.Component {


    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <View style={{ height: StatusBar.currentHeight, backgroundColor: 'black' }} />
                <Text>HOME</Text>
                <Button
                    onPress={() => navigate('Login')}
                    title="Login" />
            </View>
        );
    }
}