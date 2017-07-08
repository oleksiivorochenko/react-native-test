import React, { Component } from "react";

import firebase from "./Global";

import {
  Button,
  Text,
  View,
  TouchableHighlight,
  Image,
  ListView,
  ActivityIndicator,
  TextInput,
  RefreshControl,
  AsyncStorage,
  Alert
} from "react-native";

import Like from "./components/like.custom";

import { getMedia } from "./InstagramPictureApi";
import { fetchLikes, onLike } from "./services/likeService";

import { Actions } from "react-native-router-flux";

import styles from "../styles/Styles";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isOpen: false,
      selectedItem: "About",
      refreshing: false,
      likes: {},
      dataSource: this.getDs([])
    };
  }

  async signup(email, pass) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);

      this.login(email, pass);

      // Navigate to the Home page, the user is auto logged in
    } catch (error) {
      console.log(error.toString());
    }
  }

  async login(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      var user = firebase.auth().currentUser;
      if (user) {
        this.setState({
          logged: true,
          userId: user.userId
        });
      }     

      // Navigate to the Home page
    } catch (error) {
      console.log(error.toString());
    }
  }

  async logout() {

    try {

        await firebase.auth().signOut();

        // Navigate to login view

    } catch (error) {
        console.log(error);
    }

}

  setLike = (userId, like) => {
    let path = "/photo/" + userId + "/like";

    return firebase.database().ref(path).set({
      like: like
    });
  };

  listenUserMobile = (userId, callback) => {
    let path = "/photo/" + userId + "/like";
    firebase.database().ref(path).on("value", snapshot => {
      var like = "";
      if (snapshot.val()) {
        like = snapshot.val().like;
      }
      callback(like);
    });
  };

  toggleLikes = (photoId, countLikes) => {
    let likes = this.state.likes;
    likes[photoId] = countLikes;
    this.setState({
      likes: likes
    });
  };

  _onRefresh = tagName => {
    this.setState({ refreshing: true });
    this.fetchImages(tagName).then(() => {
      this.setState({ refreshing: false });
    });
  };

  getDs(data) {
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return ds.cloneWithRows(data);
  }

  alerts = this.listenUserMobile("3333", like => {
    Alert.alert(like);
  });

  componentDidMount() {
    this.fetchImages().then(response => {
      this.setState({
        isLoading: false,
        dataSource: this.getDs(response)
      });

      fetchLikes().then(likes => {
        this.setState({
          likes: likes
        });
      });
    });
this.logout();
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({
        logged: true
      });
    } else {
      this.setState({
        logged: false
      });
    }
  }

  fetchImages = tagName => {
    return getMedia(tagName);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    if (!this.state.logged) {
      return (
        <View>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            placeholder="Enter email"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            secureTextEntry={true}
            placeholder="Enter password."
            onChangeText={password => this.setState({ password })}
          />
          <Button
            style={styles.button}
            onPress={() =>
              this.login(this.state.email || null, this.state.password || null)}
            title="Log in"
          />

          <Button
            style={styles.button}
            onPress={() =>
              this.signup(
                this.state.email || null,
                this.state.password || null
              )}
            title="Sign up"
          />
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 0 }}>
        <View style={styles.searchSection}>
          <TouchableHighlight onPress={Actions.menuScreen}>
            <Image
              source={{
                uri:
                  "https://cdn3.iconfinder.com/data/icons/32-fufficon/32/32x32_fluffy-03-512.png"
              }}
              style={styles.icon}
            />
          </TouchableHighlight>

          <TextInput
            style={styles.input}
            placeholder="Enter tag name..."
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={text => this._onRefresh(this.state.text || null)}
          />
          <Button
            style={styles.button}
            onPress={() => this._onRefresh(this.state.text || null)}
            title="Search"
          />
        </View>

        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._onRefresh.bind(this)}
            />
          }
          renderRow={rowData =>
            <View>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <TouchableHighlight
                  /*onPress={() => navigate('PhotoDetails', {
                                        id: rowData.caption.id,
                                        tag: rowData.caption.text,
                                        url: rowData.images.standard_resolution.url,
                                        likes: this.state.likes[rowData.caption.id] || 0,
                                        callback: (likes)=>{this.toggleLikes(rowData.caption.id,likes)}
                                    })}*/
                  onPress={() =>
                    Actions.photoDetailsScreen({
                      id: rowData.caption.id,
                      tag: rowData.caption.text,
                      url: rowData.images.standard_resolution.url,
                      likes: this.state.likes[rowData.caption.id] || 0,
                      callback: likes => {
                        this.toggleLikes(rowData.caption.id, likes);
                      }
                    })}
                >
                  <Image
                    source={{ uri: rowData.images.standard_resolution.url }}
                    style={{ width: 320, height: 320 }}
                  />
                </TouchableHighlight>
                <Like
                  onPress={() => {
                    onLike(rowData.caption.id).then(newLikes => {
                      this.setLike("3333", newLikes.toString());
                      this.toggleLikes(rowData.caption.id, newLikes);
                    });
                  }}
                  likes={
                    this.state.likes[rowData.caption.id] != null
                      ? this.state.likes[rowData.caption.id].toString()
                      : "0"
                  }
                />
              </View>
              <Text>
                {rowData.caption.id}
              </Text>
              <Text>
                {rowData.caption.text}
              </Text>
            </View>}
        />
      </View>
    );
  }
}
