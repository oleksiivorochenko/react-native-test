import React, { Component } from 'react';

import { Button, Text, View, TouchableHighlight, Image, ListView,
    ActivityIndicator, TextInput, RefreshControl, AsyncStorage } from 'react-native';

import { getMedia } from './InstagramPictureApi';
import { fetchLikes } from '../services/likeService';

import styles from '../styles/Styles';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isOpen: false,
            selectedItem: 'About',
            refreshing: false,
            likes:{},
            dataSource: this.getDs([])
        }
    }

    onLike = (id) => {
        /*var currentObject = {};*/
    let newLike = 1;
/*        AsyncStorage.removeItem('INSTA_LIKES');*/
        console.log('id',id);
        AsyncStorage.getAllKeys((err , keys) => {
            console.log('werwerwerwe', keys);

            AsyncStorage.multiGet(keys, (err, stores) => {
                console.log('stores',stores);

                if(keys.indexOf(id) !== -1){


                    AsyncStorage.getItem(id, (err, result ) =>{
                        console.log('COUNT', result);
                        newLike = ++result || 1;
                        AsyncStorage.setItem(id, newLike.toString()).then(()=>{
                            this.toggleLikes(id, newLike);
                        });
                        });

                    console.log('COUNT', newLike);


                }else{
                    console.log('ff',stores);
                    AsyncStorage.setItem(id, '1').then(()=>{
                        this.toggleLikes(id, newLike);
                    });
                }




            })/*.then(newLike,()=>{

            });*/
        });

        /*.then((keys)=>{
            AsyncStorage.multiGet(keys, (err, stores) => {

                /!*stores.map((result, i , store) => {

                 })*!/
            }).then((stores)=>{
                return stores;
            })
        })*/


        /*AsyncStorage.getItem('INSTA_LIKES', (err, result) => {
            if(result !== null){
                currentObject = JSON.parse(result);
                console.log(result);
            }else{
                currentObject = this.state.likes;
            }
        }).then(()=> {
            let countLikes = currentObject[id] !== undefined
                ? currentObject[id] + 1
                : 1;
            currentObject[id] = countLikes;
            this.setState({
                likes: currentObject
            });
            AsyncStorage.setItem('INSTA_LIKES', JSON.stringify(currentObject));

        });*/
    }

    toggleLikes = (photoId, countLikes)=>{
        console.log('setlikes!!!!');
        let likes = this.state.likes;
        likes[photoId] = countLikes;
        this.setState({
            likes: likes
        });
    }
    _onRefresh = (tagName)=> {
        this.setState({refreshing: true});
        this.fetchImages(tagName).then(() => {
            this.setState({refreshing: false});
        });
    }

    getDs(data){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(data);
    }

    componentDidMount() {
        this.fetchImages().then((response)=> {
            this.setState({
                isLoading: false,
                dataSource: this.getDs(response)
            });

            fetchLikes().then((likes)=>{
                    this.setState({
                        likes: likes
                    });
                });
        });
    }

    fetchImages = (tagName) => {
        return getMedia(tagName);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        const { navigate } = this.props.navigation;
        return (
            <View style={{ paddingTop: 20}}>

                <View style={styles.searchSection}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Image
                            source={{uri:'https://cdn3.iconfinder.com/data/icons/32-fufficon/32/32x32_fluffy-03-512.png'}}
                            style={styles.icon}
                        />
                    </TouchableHighlight>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter tag name..."
                        onChangeText={(text) => this.setState({text})}
                        onSubmitEditing={(text) => this._onRefresh(this.state.text || null)}
                    />
                    <Button
                        style={styles.button}
                        onPress={() => this._onRefresh(this.state.text || null)}
                        title="Search"
                    />

                </View>
                <ListView
                    dataSource = {this.state.dataSource}
                    enableEmptySections={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this._onRefresh.bind(this)}
                        />
                    }
                    renderRow={(rowData) =>
                        <View>
                            <View style={{flex: 1,flexDirection: 'row', alignItems: 'center',}}>
                                <TouchableHighlight
                                    onPress={() => navigate('PhotoDetails', {
                                        id: rowData.caption.id,
                                        tag: rowData.caption.text,
                                        url: rowData.images.standard_resolution.url
                                    })}>
                                    <Image
                                        source={{uri:rowData.images.standard_resolution.url}}
                                        style={{width: 320, height: 320}}/>
                                </TouchableHighlight>

                                <View style={{width: 50, marginRight:5}}>
                                    <Button title = 'Like'
                                            onPress={()=> {this.onLike(rowData.caption.id)}}/>
                                </View>
                                <Text >
                                    {this.state.likes[rowData.caption.id] || 0 }
                                </Text>
                            </View>


                            <Text>{rowData.caption.id}</Text>
                            <Text>{rowData.caption.text}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}