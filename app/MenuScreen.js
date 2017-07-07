import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/Styles';

export default class MenuScreen extends React.Component {

    render() {
        return (
            <View style={{margin: 60, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableHighlight style={{padding: 10}}
                    onPress={Actions.homeScreen}>
                    <Text>Home screen</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{padding: 10}}
                    onPress={Actions.aboutScreen}>
                    <Text>About screen</Text>
                </TouchableHighlight>
            </View>
    );}
}