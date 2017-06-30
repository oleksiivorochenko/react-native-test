import { DrawerNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';

import AboutScreen from './AboutScreen';
import PhotoDetailsScreen from './PhotoDetailsScreen';
import HomeScreen from './HomeScreen';

const ReactNativeTest = DrawerNavigator({
    Home: { screen: HomeScreen},
    PhotoDetails: {screen: PhotoDetailsScreen},
    About: { screen: AboutScreen },
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);