const arr_users = require('../../data/users.js')

exports.getUsers = (token) => {
    const users = []
    const usuarios_token = []
    users = arr_users.getUsers()
    users.forEach((element) => {
        if (element.token === token) {
            usuarios_token.push(element.id)
            return usuarios_token
        } else {
            console.log('No corresponde el token al usuario')
        }
    })
}