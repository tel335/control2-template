import dataToken from '../../utils/uuid'

exports.getTokenbyUser = (id, users) => {
    users[id].token = dataToken.getUUIDV4()
    return users[id]
}

exports.getUserByToken = (users, token) => {
    let usuarioToken = users.filter((user) => {
        return user.token == token
    })    
    return usuarioToken
}