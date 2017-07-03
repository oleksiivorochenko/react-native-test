import  {DrawerNavigator}  from 'react-navigation';
import React from 'react-native';

import AboutScreen from './AboutScreen';
import PhotoDetailsScreen from './PhotoDetailsScreen';
import HomeScreen from './HomeScreen';

export default ReactNativeTest = DrawerNavigator({
    Home: { screen: HomeScreen},
    PhotoDetails: {screen: PhotoDetailsScreen},
    About: { screen: AboutScreen },
});