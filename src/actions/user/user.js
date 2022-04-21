import {KEY, SECRET} from './../../utils/constants'
import getUUIDV4 from './../../utils/uuid'
import users from './../../data/users'

exports.getToken = (ctx) => {
    const str_token = getUUIDV4;
    if(ctx.params.secret === SECRET && ctx.params.key === KEY){
        getUser(id).params.token = str_token;
    }
}

exports.getUser = (ctx) => {
    ctx.body = users.filter((user)=>{
        return user.id == ctx.params.id
    });
    return ctx
}