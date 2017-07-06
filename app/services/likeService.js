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

export async function onLike(id) {
    let newLike = 1;
    return AsyncStorage.getItem(id).then((item)=>{
            newLike = item !== null ? ++item : 1;
            return AsyncStorage.setItem(id, newLike.toString()).then(() => {
                return newLike;
            });
        });
    }