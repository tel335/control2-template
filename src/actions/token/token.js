const token = require('../../utils/uuid.js')
const arr_users = require('../../data/users.js')


//exports.token_id = (id, secret, key) => {
//  const object = {
//    id : id.token_id,
//  secret : secret.token_id,
//key : key.token_id
//}
//}

exports.getUsers = (id) => {
    const users = []
    users = arr_users.getUsers()
    users.forEach((element) => {
        if (element.id === id) {
            codigo_token = token.getUUIDV4()
            users.token = codigo_token
            return element.id
        } else {
            console.log('No existe el usuario')
        }
    })
}