import article from "../view/article";

const BASE_URL = 'https://reog.herokuapp.com';

class DataSource {

    static authenticate(email, password) {
        return fetch(`${BASE_URL}/api/auth`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => { return response.json() })
            .then(responseJson => {
                if (responseJson.status.includes('success')) {
                    return Promise.resolve(responseJson.data[0]);
                } else {
                    return Promise.reject(responseJson.message);
                }
            })
    }

    static postArticle(token, title, description, type) {
        const articleType = type.includes('news') ? 'news' :
            type.includes('sites') ? 'sites' :
                type.includes('foods') ? 'foods' :
                    'histories';

        return fetch(`${BASE_URL}/api/${articleType}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Auth-Token': token,
            }),
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
            .then(response => { return response.json() })
            .then(responseJson => {
                if (responseJson.status.includes('success')) {
                    return Promise.resolve(responseJson.data[0]);
                } else {
                    return Promise.reject(responseJson.message);
                }
            });
    }

    static postArticleImage(token, articleId, imageUrl, type) {
        const articleType = type.includes('news') ? 'news' :
            type.includes('sites') ? 'sites' :
                type.includes('foods') ? 'foods' :
                    'histories';

        return fetch(`${BASE_URL}/api/${articleType}/image?id=${articleId}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Auth-Token': token
            }),
            body: JSON.stringify({
                image: imageUrl
            })
        })
        .then(response => { return response.json()})
        .then(responseJson => {
            if (responseJson.status.includes('success')) {
                return Promise.resolve(responseJson.status);
            } else {
                return Promise.reject(responseJson.message);
            }
        });
    }
}

export default DataSource;