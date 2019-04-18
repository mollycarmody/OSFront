import axios from 'axios'

const API_BASE_URL = 'https://vcm-8728.vm.duke.edu:8888/api/';

function handleResponse(response, callback) {
    return response.data ? callback(response.data) : console.error(response)
}

export const Users = {
    me: (callback) =>
        axios.get(API_BASE_URL + 'me/')
            .then(response => handleResponse(response, callback)),
    all: (params, callback) =>
        axios.get(API_BASE_URL + 'users/')
            .then(response => handleResponse(response, callback)),
    get: ({username}, callback) =>
        axios.get(API_BASE_URL + 'users/' + username + '/')
            .then(response => handleResponse(response, callback)),
    update: ({username, ...rest}, callback) =>
        axios.post(API_BASE_URL + 'users/' + username + '/', {...rest})
            .post(rest)
            .then(response => handleResponse(response, callback)),
    delete: ({username}, callback) =>
        axios.delete(API_BASE_URL + 'users/' + username + '/')
            .delete(username)
            .then(response => handleResponse(response, callback))
}

export const Hosts = {
    all: (params, callback) =>
        axios.get(API_BASE_URL + 'hosts/', {params})
            .then(response => handleResponse(response, callback)),
    get: ({username}, callback) =>
        axios.get(API_BASE_URL + 'hosts/' + username + '/')
            .then(response => handleResponse(response, callback)),
    become: (callback) =>
        axios.post(API_BASE_URL + 'hosts/', {})
            .then(response => handleResponse(response, callback)),
    delete: ({username}, callback) =>
        axios.delete(API_BASE_URL + 'hosts/' + username + '/')
            .delete(username)
            .then(response => handleResponse(response, callback))
}

export const Locations = {
    all: (params, callback) =>
        axios.get(API_BASE_URL + 'locations/', {params})
            .then(response => handleResponse(response, callback)),
    get: ({google_place_id}, callback) =>
        axios.get(API_BASE_URL + 'locations/' + google_place_id + '/')
            .then(response => handleResponse(response, callback)),
    create: (data, callback) =>
        axios.post(API_BASE_URL + 'locations/', data)
            .then(response => handleResponse(response, callback)),
}

export const Listings = {
    all: (params, callback) =>
        axios.get(API_BASE_URL + 'listings/', {params})
            .then(response => handleResponse(response, callback)),
    get: ({id}, callback) =>
        axios.get(API_BASE_URL + 'listings/' + id + '/')
            .then(response => handleResponse(response, callback)),
    create: (data, callback) =>
        axios.post(API_BASE_URL + 'listings/', data)
            .then(response => handleResponse(response, callback)),
    update: ({id, ...rest}, callback) =>
        axios.post(API_BASE_URL + 'listings/' + id + '/', rest)
            .then(response => handleResponse(response, callback)),
    delete: ({id}, callback) =>
        axios.delete(API_BASE_URL + 'listings/' + id)
            .then(response => handleResponse(response, callback))
}

export const Bookings = {
    all: (params, callback) =>
        axios.get('bookings/')
            .then(response => handleResponse(response, callback)),
    get: ({id}, callback) =>
        axios.get(API_BASE_URL + 'bookings/' + id + '/')
            .then(response => handleResponse(response, callback)),
    create: (data, callback) =>
        axios.post(API_BASE_URL +'bookings/', data)
            .then(response => handleResponse(response, callback)),
    update: ({id, ...rest}, callback) =>
        axios.post('bookings/' + id + '/', rest)
            .then(response => handleResponse(response, callback)),
    delete: ({id}, callback) =>
        axios.delete('bookings/' + id + '/')
            .then(response => handleResponse(response, callback)),
    confirm: ({id}, callback) =>
        axios.post('bookings/', {confirmed: true})
            .then(response => handleResponse(response, callback))
}
