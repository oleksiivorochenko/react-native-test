import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, Image } from 'react-native';

import styles from '../styles/Styles';

export default class PhotoDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Photo Details`
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                {/*<Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />*/}
                <TouchableHighlight onPress={() => { alert('You tapped on photo')}}>
                    <View>
                        <Image
                            source={{uri:params.url}}
                            style={{width: 420, height: 420}}/>
                        <Text>{'ID:' + params.id}</Text>
                        <Text>{'Photo Url:' + params.url}</Text>
                        <Text>{'Tag:' + params.tag}</Text>
                    </View>
                </TouchableHighlight>
                <View style={{flex: 1,flexDirection: 'row', alignItems: 'center',}}>
                    <View style={{width: 50, marginRight: 5, backgroundColor: 'blue'}}>
                        <Button title = 'Like'
                                onPress={()=> {alert('Like!')}}/>
                    </View>
                    <Text >
                        {'Some text...2'}
                    </Text>
                </View>
            </View>
        );
    }
}