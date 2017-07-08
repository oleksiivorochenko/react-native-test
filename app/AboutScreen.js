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

import styles from '../styles/Styles'

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

                <View style={{flex: 0, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'orange',}}>
                    <TouchableHighlight
                        style={{ marginLeft: 10, marginRight: 120 }}
                        onPress={Actions.pop}>
                        <Image
                            source={{uri:'https://d30y9cdsu7xlg0.cloudfront.net/png/344376-200.png'}}
                            style={styles.icon}
                        />
                    </TouchableHighlight>

                    {/*<View style={{ marginLeft: 10, marginRight: 90 }}>
                        <Button onPress={Actions.pop} title='Back' />
                    </View>*/}

                    <View style={{ marginLeft: 20, marginRight: 20 }}>
                        <Button onPress={Actions.homeScreen} title='Home' />
                    </View>

                    {/*<View style={{ marginLeft: 90, marginRight: 10}}>
                        <Button onPress={Actions.menuScreen} title='Menu' />
                    </View>*/}

                    <TouchableHighlight
                        style={{ marginLeft: 120, marginRight: 10}}
                        onPress={Actions.menuScreen}>
                        <Image
                            source={{uri:'https://cdn3.iconfinder.com/data/icons/32-fufficon/32/32x32_fluffy-03-512.png'}}
                            style={styles.icon}
                        />
                    </TouchableHighlight>
                </View>


                <View style={{margin: 128}}>
                    <Text style={{padding: 10}}>This is the best ever application!</Text>
                    <Button onPress={goToHome} title='Home screen' />
                </View>
            </View>

        );
    }
}