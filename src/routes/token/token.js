import {getUUIDV4} from './../../utils/uuid'
import {KEY, SECRET} from './../../utils/constants'
import {getUsers} from './../../data/users'
var users = getUsers()
exports.users = users

export default function getToken(ctx) {
    let key = ctx.request.body.key
    let secret = ctx.request.body.secret
    let id_find = ctx.request.body.id
    if (key == KEY && secret == SECRET ){
        ctx.status = 200
        let user_find = users.filter((user) => user.id == id_find)
        
        if (user_find.length == 0) {
            ctx.body = { "message": "id user not found" }
        } else {
            users.forEach(user => {
                if (user.id == user_find[0].id){
                    if (user['token']){
                        ctx.body = { "message": "token assigned to user" }
                    }else{
                        let tkn = getUUIDV4()
                        user['token'] = tkn
                        ctx.body = { "token": tkn }
                    }
                }
                
            });
            
            }
            
    }else{
        ctx.status = 401
        ctx.body = { "message": "key or secret Invalid" }
    }
    return ctx
}