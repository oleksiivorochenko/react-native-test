import { AsyncStorage } from 'react-native';

export function fetchLikes() {

    let sss = {};
 return AsyncStorage.getAllKeys((err , keys) => {
        let ret = {};
        if(keys.length > 0){
         AsyncStorage.multiGet(keys, (err, stores) => {
             stores.map((store) => {
                 ret[store[0]] = store[1];
             })
             console.log('OBJECT',ret);
            })
            return ret;
        }
    })

}