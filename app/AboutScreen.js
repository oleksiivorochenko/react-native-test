import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, Image } from 'react-native';

import styles from '../styles/Styles'

export default class AboutScreen extends React.Component {
    static navigationOptions = {
        title: 'About',
        headerRight: <TouchableHighlight
            //onPress={() => navigate('Menu')}>
            onPress={() => alert('Pressed!')}>
            <Image
                source={{uri:'https://cdn3.iconfinder.com/data/icons/32-fufficon/32/32x32_fluffy-03-512.png'}}
                style={styles.icon}
            />
        </TouchableHighlight>
    };
    render() {
        return (
            <View>
                <Text style={{padding: 10}}>This is the best ever app!</Text>
                {/*<Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />*/}
            </View>
        );
    }
}