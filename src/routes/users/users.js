const token = require('../../utils/uuid')
const constants = require('../../utils/constants')
const users = require('../../data/users')

// console.log(users.getUsers())
var totalUsers = users.getUsers()

export default function getToken(ctx, id, secret, key) {
    var id = ctx.request.body.id
    var secret = ctx.request.body.secret
    var key = ctx.request.body.key

    if (secret != constants.SECRET || key != constants.KEY) {
        return false
    }else if(id < 0 || id > 10000){
        return false
    }else {
        var user = totalUsers.find(function(element){
            return element.id = id
        })
        console.log(user)
        user.token = token.getUUIDV4()

        console.log(user)
        return user.token
    }
    // ctx.body = { token: 'ok' }
    // ctx.body = {token: user.token}
}

export function getUser(ctx,token){
    var token = ctx.request.body.token

    var user = totalUsers.find(function(element){
        return element.token = token
    })
    return user

}
