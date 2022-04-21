import userActions from '../../data/users'

exports.getAllUsers = (ctx) => {
    ctx.body = userActions.getUsers()
    return ctx
}

exports.getToken = (ctx) => {
    var token = userActions.getToken(ctx.request.query.id,ctx.request.query.key,ctx.request.query.secret)
    ctx.body = {token}
    return ctx
}

exports.getUser = (ctx) => {
    user = userActions.getUser(ctx.request.query.token)
    ctx.body = {user}
    return ctx
}
