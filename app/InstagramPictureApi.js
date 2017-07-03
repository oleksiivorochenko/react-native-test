INSTA = require('./InstagramConstants');

export function getMedia(tagName) {
    let tag = tagName != null && tagName != ' '? tagName : 'test';
    let url = INSTA.BASE_URL + '/tags/' + tag + '/media/recent?access_token=' + INSTA.ACCESS_TOKEN;

    return fetch(url,{
        method: 'GET',
        mode: 'no-cors',
        credentials: 'include'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson.data;
    })
    .catch((error) => {
        console.error(error);
    });
}
