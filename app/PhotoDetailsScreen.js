import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import { onLike } from './services/likeService';
import Like from './components/like.custom';

import styles from '../styles/Styles';

export default class PhotoDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Photo Details`
    });

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        let { params } = this.props.navigation.state;
        this.setState({
            id: params.id,
            uri:params.url,
            tag: params.tag,
            likes: params.likes
        })
    }
    render() {
        return (
            <View>
                {/*<Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />*/}
                <TouchableHighlight onPress={() => { Alert.alert('You tapped on photo')}}>
                    <View>
                        <Image
                            source={{uri:this.state.uri}}
                            style={{width: 420, height: 420}}/>
                        <Text>{'ID:' + this.state.id}</Text>
                        <Text>{'Photo Url:' + this.state.url}</Text>
                        <Text>{'Tag:' + this.state.tag}</Text>
                    </View>
                </TouchableHighlight>
                <Like
                    onPress={()=> {onLike(this.state.id).then((newLikes)=>{
                        this.setState({
                            likes: newLikes
                        })
                    })}}
                    likes={this.state.likes + '' || '0'}
                />
            </View>
        );
    }
}