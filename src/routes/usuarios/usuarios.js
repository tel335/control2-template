const userAction = require('../../actions/usuarios/usuarios')

exports.getToken = (ctx) => {
    let id = ctx.request.body.id
    let secret = ctx.request.body.secret
    let key = ctx.request.body.key

    let response = userAction.getToken(id, secret, key)
    if (Object.keys(response).length === 0) {
        ctx.body = {
            status: 204,
            message: 'No Content'
        }
    } else {
        ctx.body = { token: response }
    }
    return ctx
}

exports.getUser = (ctx) => {
    let token = ctx.request.body.token

    let response = userAction.getUser(token)
    ctx.body = response
    return ctx
}