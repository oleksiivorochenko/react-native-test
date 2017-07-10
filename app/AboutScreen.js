import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

/*import NativeLayout, {
    BorderLayout,
    Center,
    Footer,
    Header,
    Fill,
    LinearLayout,
    HorizontalLinearLayout,
    VerticalLinearLayout
} from 'react-native-layout';

const { FillLayout, Layout,  Top, Left, Right, Bottom } = BorderLayout;

import { Layout, FillLayout, Top, Left, Right, Bottom } from './lib/BorderLayout';*/

import styles from '../styles/Styles';

import Header from './Header';

export default class AboutScreen extends React.Component {

    render() {
        const goToHome = () => Actions.homeScreen();
        return (
/*            <FillLayout>
                <Top>
                    <Text>Header text</Text>
                </Top>
                <View style={{margin: 128}}>
                    <Text style={{padding: 10}}>This is the best ever application!</Text>
                    <Button onPress={goToHome} title='Home screen' />
                </View>
            </FillLayout>*/

            <View>

                <Header />


                <View style={{margin: 128}}>
                    <Text style={{padding: 10}}>This is the best ever application!</Text>
                    <Button onPress={goToHome} title='Home screen' />
                </View>

            </View>

        );
    }
}