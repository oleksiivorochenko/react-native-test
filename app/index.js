import  { DrawerNavigator }  from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import React from 'react-native';
import { Button, Text, View, TouchableHighlight, Image } from 'react-native';

import AboutScreen from './AboutScreen';
import PhotoDetailsScreen from './PhotoDetailsScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';

import styles from '../styles/Styles';

//export default ReactNativeTest = DrawerNavigator({
export default ReactNativeTest = StackNavigator({
    Home: { screen: HomeScreen,
            /*navigationOptions: ({navigation}) => ({
                title: 'Title main',
                headerRight: <TouchableHighlight
                    /!*onPress={state.params.onRightPressed}>*!/
                    /!*onPress={({navigation}) => this.props.navigator.navigate('Menu')}>*!/
                    /!*onPress={this.props.navigation.navigate('Menu')}>*!/
                    onPress={() => alert('Pressed!')}>
                    <Image
                        source={{uri:'https://cdn3.iconfinder.com/data/icons/32-fufficon/32/32x32_fluffy-03-512.png'}}
                        style={styles.icon}
                    />
                </TouchableHighlight>
            }),*/
    },
    PhotoDetails: { screen: PhotoDetailsScreen },
    About: { screen: AboutScreen },
    Menu: { screen: MenuScreen },
});
