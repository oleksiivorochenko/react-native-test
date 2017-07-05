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
    /*        AsyncStorage.removeItem('INSTA_LIKES');*/

   return AsyncStorage.getAllKeys().then((keys) => {
        return AsyncStorage.multiGet(keys).then((items)=>{
            if(keys.indexOf(id) !== -1){
                return AsyncStorage.getItem(id).then((result)=>{
                    newLike = ++result || 1;
                   return AsyncStorage.setItem(id, newLike.toString()).then(()=>{
                        /*this.toggleLikes(id, newLike);*/
                        console.log('qwerty', newLike);
                        return newLike;
                    });
                });
            }else{
               return AsyncStorage.setItem(id, '1').then(()=>{
                    /*this.toggleLikes(id, newLike);*/
                    return newLike;
                });
            }
        })
    })
       /* AsyncStorage.multiGet(keys, (err, stores) => {
            if(keys.indexOf(id) !== -1){
                AsyncStorage.getItem(id, (err, result ) =>{
                    newLike = ++result || 1;
                    AsyncStorage.setItem(id, newLike.toString()).then(()=>{
                        /!*this.toggleLikes(id, newLike);*!/
                    });
                });
            }else{
                AsyncStorage.setItem(id, '1').then(()=>{
                    /!*this.toggleLikes(id, newLike);*!/
                });
            }
        })
    });*/
}