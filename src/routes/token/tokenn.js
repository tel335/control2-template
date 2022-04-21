const { KEY, SECRET } = require('../../utils/constants')


exports.getToken = (ctx) => {
    let id = ctx.request.body
    let key = ctx.request.body.KEY
    let secret = ctx.request.body.SECRET
    if (KEY === key && SECRET === secret) {
        //console.log('Credenciales correctas')
        ctx.body = {
            status: 200,
            message: 'Credenciales correctas'
        }

    } else {
        ctx.body = {
            status: 500,
            message: 'Error'
        }
    }
}