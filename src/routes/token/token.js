
import tokenAction from '../../actions/token'
const response = require('koa/lib/response')
//const tokenAction = require('../../actions/token')

exports.getToken = (ctx) =>{
    tokenAction.getToken(ctx.params.id, ctx.params.secret, ctx.params.key)
    ctx.body = { message: 'ok' }
    return ctx
}