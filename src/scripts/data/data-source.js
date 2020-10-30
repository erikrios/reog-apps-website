class DataSource {
    static authenticate(email, password) {
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
                if (responseJson.status.includes('success')) {
                    console.log('success');
                    return Promise.resolve(responseJson.data[0]);
                } else {
                    console.log('error');
                    return Promise.reject(`${responseJson.message}`);
                }
            })
    }
}

export default DataSource;