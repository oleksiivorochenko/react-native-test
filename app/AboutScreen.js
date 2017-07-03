import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../styles/Styles'

export default class AboutScreen extends React.Component {
    static navigationOptions = {
        title: 'About',
    };
    render() {
        return (
            <View>
                <Text>About app...</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }
}