class DataSource {
    static authenticate(email, username) {
        return fetch('https://reog.herokuapp.com/api/auth', {
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
                if (responseJson.status.contains('success')) {
                    return Promise.resolve(responseJson.data[0]);
                } else {
                    return Promise.reject(`${responseJson.message}`);
                }
            })
            .catch(err => console.error(err));
    }
}

export default DataSource;