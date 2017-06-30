import React, { Component } from 'react';

import { DrawerNavigator, StackNavigator } from 'react-navigation';
import {
    ActivityIndicator, Alert, ListView,
    StyleSheet, RefreshControl, TextInput,
    AppRegistry, TouchableHighlight, Button,
    Text, View, Image, AsyncStorage
} from 'react-native';

import { getMedia } from './InstagramPictureApi';

class HomeScreen extends React.Component {
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

        this.fetchLikes().then((response)=>{
            console.log('pppppppppppppppppp', response);
            this.setState({
                likes: response || {}
            })
        })
    }

    onLike = (id) => {

        var currentObject = {};
            /*const value = AsyncStorage.getItem('INSTA_LIKES').then((value) =>{
                console.log('111rtrrrtrtrtrtrtrtr', value);
                currentObject = value;
            });*/
        /*AsyncStorage.removeItem('INSTA_LIKES');*/
        AsyncStorage.getItem('INSTA_LIKES', (err, result) => {

            console.log('res1', result);
            console.log('res2', this.state.likes);

            if(result !== null){
                currentObject = result
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
            console.log('res3', currentObject);

            AsyncStorage.setItem('INSTA_LIKES', JSON.stringify(currentObject));
            AsyncStorage.getItem('INSTA_LIKES', (err, result) => {
                console.log(result);
            });
        });
            /*if (value !== null){
                // We have data!!
                currentObject = value;
                console.log('rtrrrtrtrtrtrtrtr', value);
            }else{
                currentObject = this.state.likes;
            }*/


       /* let currentObject = obj !== {}
            ? obj
            : this.state.likes;*/


    }

    _onRefresh = (tagName)=> {
        this.setState({refreshing: true});
        this.fetchImages(tagName).then(() => {
            this.setState({refreshing: false});

            AsyncStorage.getItem('INSTA_LIKES', (err, result) => {
                console.log('result', result);
                this.setState({
                    likes: result
                });

            }).then(()=>{console.log('likes', this.state.likes)});
        });
    }

    getDs = (data) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(data);
    }

    componentDidMount() {
        this.fetchImages()
    }

    fetchLikes =  async () => {
        return await AsyncStorage.getItem('INSTA_LIKES');
    }

    fetchImages = (tagName) => {
        getMedia(tagName).then((response) => {
            this.setState({
                isLoading: false,
                dataSource: this.getDs(response)
            })
        })
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
                        <View style={{flex: 1,flexDirection: 'row', alignItems: 'center'}}>
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


class AboutScreen extends React.Component {
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

class PhotoDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Photo Details`
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
              <Button
                  onPress={() => this.props.navigation.goBack()}
                  title="Go back home"
              />
              <TouchableHighlight onPress={() => { Alert.alert('You tapped on photo')}}>
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
                          onPress={()=> {Alert.alert('Like!')}}/>
                </View>
                <Text >
                    {'Some text...2'}
                </Text>
              </View>
            </View>
        );
    }
}

const ReactNativeTest = DrawerNavigator({
    Home: { screen: HomeScreen},
    PhotoDetails: {screen: PhotoDetailsScreen},
    About: { screen: AboutScreen },
});


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
        height: 50
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    searchSection: {
        flex: 0,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        borderWidth:1,
        padding: 10,
        height: 50
    },
    input: {
        flex: 1,
        height: 50,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);

