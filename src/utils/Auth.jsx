const API_URL = 'http://localhost:3000';//'https://api.apetruhin.nomoredomains.club';//'http://localhost:3001'; //"https://api.apetruhin.nomoredomains.club";

export const register = (name, email, password) => {
    return fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    }).then(checkResponse)
        .catch(err => {
            console.log(err);
        });
};

export const login = (email, password) => {
    return fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkResponse);
};

export const checkToken = token => {
    return fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    }).then(checkResponse)
        .catch(err => {
            console.log(err);
        });
};

export const checkResponse = res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};