import axiosRestClient from 'axios-rest-client'

const API_BASE_URL = 'https://vcm-8728.vm.duke.edu:8888/api/'

const api = axiosRestClient({
    baseUrl: API_BASE_URL
});

//example callback: data => console.log(data)

//example usage: actions.Listings.all(params, data => console.log(data)}

function handleResponse(response, callback) {
    return response.isSuccessful ? callback(response.data) : console.log(response)
}

export const Users = {
    me: (callback) =>
        api.me
            .all()
            .then(response => handleResponse(response, callback)),
    all: (params, callback) =>
        api.users
            .all()
            .then(response => handleResponse(response, callback)),
    get: ({username}, callback) =>
        api.users
            .find(username)
            .then(response => handleResponse(response, callback)),
    update: ({username, ...rest}, callback) =>
        api.users[username]
            .post(rest)
            .then(response => handleResponse(response, callback)),
    delete: ({username}, callback) =>
        api.users
            .delete(username)
            .then(response => handleResponse(response, callback))
}

export const Hosts = {
    all: (params, callback) =>
        api.hosts
            .all(params)
            .then(response => handleResponse(response, callback)),
    get: (username, callback) =>
        api.hosts
            .find(username)
            .then(response => handleResponse(response, callback)),
    become: (callback) =>
        api.hosts
            .post({})
            .then(response => handleResponse(response, callback)),
    delete: ({username}, callback) =>
        api.hosts
            .delete(username)
            .then(response => handleResponse(response, callback))
}

export const Locations = {
    all: (params, callback) =>
        api.locations
            .all(params)
            .then(response => handleResponse(response, callback)),
    get: ({google_place_id}, callback) =>
        api.locations
            .find(google_place_id)
            .then(response => handleResponse(response, callback)),
    create: (data, callback) =>
        api.locations
            .create(data)
            .then(response => handleResponse(response, callback)),
}

export const Listings = {
    all: (params, callback) =>
        api.listings
            .all(params)
            .then(response => handleResponse(response, callback)),
    get: ({id}, callback) =>
        api.listings
            .find(id)
            .then(response => handleResponse(response, callback)),
    create: (data, callback) =>
        api.listings
            .create(data)
            .then(response => handleResponse(response, callback)),
    update: (data, callback) =>
        api.listings
            .update(data)
            .then(response => handleResponse(response, callback)),
    delete: ({id}, callback) =>
        api.listings
            .delete(id)
            .then(response => handleResponse(response, callback))
}

export const Bookings = {
    all: (params, callback) =>
        api.bookings
            .all(params)
            .then(response => handleResponse(response, callback)),
    get: ({id}, callback) =>
        api.bookings
            .find(id)
            .then(response => handleResponse(response, callback)),
    create: (data, callback) =>
        api.bookings
            .create(data)
            .then(response => handleResponse(response, callback)),
    update: ({id, ...rest}, callback) =>
        api.bookings[id]
            .post(rest)
            .then(response => handleResponse(response, callback)),
    delete: ({id}, callback) =>
        api.bookings
            .delete(id)
            .then(response => handleResponse(response, callback)),
    confirm: ({id}, callback) =>
        api.bookings[id]
            .post({confirmed: true})
            .then(response => handleResponse(response, callback))
}