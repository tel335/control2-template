import {KEY, SECRET} from './../../utils/constants'
import getUUIDV4 from './../../utils/uuid'
import users from './../../data/users'

exports.getToken = (ctx) => {
    const str_token = getUUIDV4.getUUIDV4();
    if(ctx.params.secret === SECRET && ctx.params.key === KEY){
        ctx.body = str_token;
        return ctx;
    }else{
        return ctx;
    }
}

function filterUser(ctx){
    
    return ctx;
}


