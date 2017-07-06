import  { DrawerNavigator }  from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import React from 'react-native';

import AboutScreen from './AboutScreen';
import PhotoDetailsScreen from './PhotoDetailsScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';

//export default ReactNativeTest = DrawerNavigator({
export default ReactNativeTest = StackNavigator({
    Home: { screen: HomeScreen },
    PhotoDetails: { screen: PhotoDetailsScreen },
    About: { screen: AboutScreen },
    Menu: { screen: MenuScreen },

});