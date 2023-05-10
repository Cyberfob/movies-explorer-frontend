class MainApi {
    constructor(options) {
        this._url = options.url
        this._headers = options.headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res}`);
        }
    }

    _getToken() {
        return localStorage.getItem('jwt');
    }

    async getUserInfo() {
        const request = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...this._headers
            }

        }
        return fetch(`${this._url}/users/me`, request)
            .then(this._checkResponse)
    }

    setUserInfo({ name, about }) {
        const request = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...this._headers
            },
            body: JSON.stringify({ name, about })
        }
        return fetch(`${this._url}/users/me`, request)
            .then(this._checkResponse)
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._checkResponse);
    }


    addCard({ name, link }) {
        const request = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...this._headers
            },
            body: JSON.stringify({ name, link })
        }
        return fetch(`${this._url}/cards`, request)
            .then(this._checkResponse)
    }


    setLike(_id, state) {
        const request = {
            method: `${!state ? 'PUT' : 'DELETE'}`,
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...this._headers
            },
        }
        return fetch(`${this._url}/cards/${_id}/likes`, request)
            .then(this._checkResponse)
    }

    removeCard(_id) {

        const request = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...this._headers
            },
        }
        return fetch(`${this._url}/cards/${_id}`, request)
            .then(this._checkResponse)

    }
    updateProfileInfo(name, email) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, email }),
        }).then(this._checkResponse);
    }

    setToken(token) {
        this._headers.Authorization = `Bearer ${token}`;
    }

    saveMovie(data) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._checkResponse);
    }

    deleteMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._checkResponse);
    }
}


export const mainApi = new MainApi({
    url: 'http://localhost:3000',//'https://api.apetruhin.nomoredomains.club',//'http://localhost:3001', //'https://api.apetruhin.nomoredomains.club',
    headers: {
        'Content-Type': 'application/json'
    }
}
);

