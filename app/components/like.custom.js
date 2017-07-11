/**
 * Created by oleksii.vorochenko on 05.07.2017.
 */
import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { onLike } from '../services/likeService';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from 'react-native-button';

class Like extends Component {
    static propTypes = {
        likes: React.PropTypes.string.isRequired,


    }
    constructor(props){
        super(props)
    }
    render = () => {        
        const { likes } = this.props;
        let name = likes === '0' ? 'heart-o' : 'heart';
        return (           
             <TouchableOpacity style={{width:50}}
                onPress={this.props.onPress}>
                <Text><Icon name={name} size={20} color="#e55050" >{" "+likes}</Icon></Text>
            </TouchableOpacity>
        );
    }

}

const styles =StyleSheet.create({
    headline: {
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#4190ea',
        color: 'white'
    }
});

export default Like;

