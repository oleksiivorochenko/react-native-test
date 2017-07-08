import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './HomeScreen';
import PhotoDetailsScreen from './PhotoDetailsScreen';
import MenuScreen from './MenuScreen';
import AboutScreen from './AboutScreen';


export default class ReactNativeTest extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="homeScreen" component={HomeScreen} title="Home" initial={true} hideNavBar={true}/>
                    <Scene key="photoDetailsScreen" component={PhotoDetailsScreen} title="Photo details" hideNavBar={false}/>
                    <Scene key="menuScreen" component={MenuScreen} direction="leftToRight" title="Menu" hideNavBar={false}/>
                    <Scene key="aboutScreen" component={AboutScreen} title="About" hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

