module.exports = {
    setCookie: (name, value, hoursToLive) => {
        const cookie = `${name}=${encodeURIComponent(value)}`;

        if (typeof hoursToLive === 'number') {
            cookie += `; max-age=${hoursToLive * 60 * 60}`;
            document.cookie = cookie;
        }
    },
    getCookie: (name) => {
        const cookieArr = document.cookie.split(';');
        
        for(i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split('=');

            if (name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }

        return null;
    }
}