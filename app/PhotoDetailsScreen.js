import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/Styles';

export default class PhotoDetailsScreen extends React.Component {

    render() {

        return (
            <View>
                <TouchableHighlight onPress={() => { Alert.alert('You tapped on photo')}}>
                    <View>
                        <Image
                            source={{uri: this.props.url /*params.url*/ }}
                            style={{width: 420, height: 420}}/>
                        <Text>{'ID:' + this.props.id /*params.id*/}</Text>
                        <Text>{'Photo Url:' + this.props.url /*params.url*/ }</Text>
                        <Text>{'Tag:' + this.props.tag /*params.tag*/ }</Text>
                    </View>
                </TouchableHighlight>

                <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
                    <View style={{width: 50, height: 50, marginRight: 5}}>
                        <Button title = 'Like'
                                onPress={()=> {
                                    Alert.alert('Like!')}}/>
                    </View>
                    <Text style={{paddingBottom: 15}}>
                        { 4 }
                    </Text>
                </View>

                <View style={{width: 80, height: 50, marginTop: 20}}>
                    <Button
                        onPress={Actions.homeScreen}
                        title='Home screen'
                    />
                </View>

            </View>
        );
    }
}