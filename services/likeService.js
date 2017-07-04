import { AsyncStorage } from 'react-native';

export async function fetchLikes() {

var keys = await AsyncStorage.getAllKeys();
var items = await AsyncStorage.multiGet(keys);
let ret = {};
items.map((item) => {
    ret[item[0]] = item[1];
})
    return ret;

    /*return AsyncStorage.getAllKeys().then((keys)=>{
        return  AsyncStorage.multiGet(keys).then((items)=>{
            let ret = {};
            items.map((item) => {
                ret[item[0]] = item[1];
            })
            return ret;
        })
    });*/
}