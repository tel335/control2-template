const users = require('../../data/users')
const constant = require('../../utils/constants')
const token = require('../../utils/uuid')

var ListUsers = users.getUsers()

exports.getToken = (id, secret, key) => {
    let response = []

    ListUsers.forEach(element => {
        if (Object.keys(element)[0] == id && constant.SECRET == secret && constant.KEY == key) {
            let value = token.getUUIDV4()

            ListUsers[id] = value
            response.push(value)
        }
    })
    return response
}

exports.getUser = (token) => {
    let response = {}

    ListUsers.forEach(element => {
        if (element.id == token) {
            response.id = Object.keys(element)[0]
            response.name = element.name
            response.email = element.email
            reponse.bitcoinAddress = element.bitcoinAddress
        }
    })
    return response
}