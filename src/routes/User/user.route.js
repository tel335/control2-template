const response = require('koa/lib/response')

const usersAction = require('../../actions/users')

exports.getToken = (ctx) => {
    let id = ctx.params.id 
    let secret = ctx.params.secret
    let key = ctx.params.key
    let response = usersAction.getToken(id,secret,key)
    if(Object.keys(response).length === 0){
        ctx.body = {
            status: 400,
            message: 'Bad Request'
        }
    }
    else{
        ctx.body = {
                    token: response
                }
    }
    return ctx
}

exports.getUser = (ctx) => {

}
