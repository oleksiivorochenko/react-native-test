import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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