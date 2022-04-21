import token from './../../utils/uuid'
import {KEY, SECRET} from './../../utils/constants'
import {getUsers} from './../../data/users'
import {users} from './../token/token'

export default function getUser(ctx) {
    let tkn = ctx.request.body.token
    let user_find = users.filter((user) => user.token == tkn)[0]
    delete user_find['token']
    ctx.status = 200
    if (!tkn) {
        ctx.status = 400 
        ctx.body = {"message": "Token Null"}
    } else {
        if (user_find != 0){
            ctx.body = user_find
        }else {
            ctx.body = {"message": "Token Not Found in user"} 
        }
    }
    return ctx
}