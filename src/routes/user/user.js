import token from '../token/token'

exports.getUser = (ctx) => {
    const user = token.getUsers().filter((user) =>{
        return user.token == ctx.params.token
    })
    return ctx
}