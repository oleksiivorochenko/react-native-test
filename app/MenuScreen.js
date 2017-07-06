import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';

import styles from '../styles/Styles';

export default class MenuScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Main menu`
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