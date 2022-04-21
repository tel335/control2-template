import { idempotent } from "koa/lib/request"
import { KEY, SECRET } from "../../utils/constants"

export default function getHealth(ctx) {
    ctx.body = { message: 'ok' }
}




export function getUserT(ctx) {
    ctx.body = { token: postTokenn(), 
                    user: getUser()
    
    }
    return ctx
}

exports.postToken = (ctx) => {
    let search = ctx.request.body
    let response = user.posToken(search.KEY, search.SECRET)
    if(search.SECRET == SECRET && search.KEY == KEY){
        ctx.body ={token : getUUIDV4()}
    }
    else{
        ctx.body = {
            message : 'error'
        }
        
    }
    
    return ctx
}

