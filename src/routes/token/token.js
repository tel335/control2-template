import users from "../../actions/users";

exports.getToken = (ctx) => {
    const id = ctx.params.id
    const key = ctx.params.key
    const secret = ctx.params.secret
    //console.log(id, key, secret)
    //const token2 = users.getUserAndToken2(id, key, secret);
    const token2 = users.getTok(id, key, secret)
    ctx.body = {
        token : token2
    }
    return ctx
}