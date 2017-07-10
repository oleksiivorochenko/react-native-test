import React, { Component } from 'react';

import { Button, Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import { onLike } from './services/likeService';
import Like from './components/like.custom';
import { Actions } from 'react-native-router-flux';


import styles from '../styles/Styles';
import Header from './Header';

export default class PhotoDetailsScreen extends React.Component {   

constructor(props) {
        super(props);

        this.state = {}
    }
componentDidMount() {
         
        this.setState({
            id: this.props.id,
            uri:this.props.url,
            tag: this.props.tag,
            likes: this.props.likes,
            callback: (likes)=>{this.props.callback(likes)}
        })
    }
    render() {
        return (
            <View>

                <Header />

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
                <Like
                    onPress={()=> {onLike(this.state.id).then((newLikes)=>{
                        this.state.callback(newLikes);
                        this.setState({
                            likes: newLikes.toString()
                        })
                    })}}
                    likes={this.state.likes + '' || '0'}
                />

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