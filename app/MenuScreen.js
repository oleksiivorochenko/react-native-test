import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, Image } from 'react-native';

import styles from '../styles/Styles';

export default class MenuScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: `Main menu`,
        headerRight: <TouchableHighlight
            //onPress={() => navigate('Menu')}>
            onPress={() => alert('Pressed!')}>
            <Image
                source={{uri:'https://cdn3.iconfinder.com/data/icons/32-fufficon/32/32x32_fluffy-03-512.png'}}
                style={styles.icon}
            />
        </TouchableHighlight>
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TouchableHighlight style={{padding: 10}}
                    onPress={() => navigate('Home')}>
                    <Text>Home screen</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{padding: 10}}
                    onPress={() => navigate('About')}>
                    <Text>About screen</Text>
                </TouchableHighlight>
            </View>
        );
    }
}