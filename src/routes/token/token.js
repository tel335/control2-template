import usersActions from '../../data/users'
import {KEY , SECRET} from '../../utils/constants'
import Token from '../../utils/uuid'

const users = usersActions.getUsers()
var tokens = ''

exports.getToken = (ctx) => {
    if(ctx.params.key == KEY && ctx.params.secret == SECRET){
        tokens = { token : Token.getUUIDV4()}
        ctx.body = tokens
        linkedToken(ctx.params.id)
        return ctx
    }else{
        ctx.body = {message: 'Error en la autentificacion'}
        ctx.status = 401
        return ctx
    }

}

function linkedToken(id){
    users.map((user)=>{
        if(user.id == id){
            user = Object.assign(user,tokens)
        }
    });
}

exports.getUsers = () => {
    return users
}