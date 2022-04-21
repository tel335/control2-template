const response = require('koa/lib/response')
const getUserAction = require('../../actions/users')

const { KEY, SECRET} = require('../../utils/constants')
exports.getToken = (ctx)=>{
    let body = ctx.request.body
    let id = body.id
    let key = body.key
    let secret = body.secret

    if( key === KEY && secret === SECRET){
        let response = getUserAction.getToken(id)
        ctx.response.status = 200
        if(Object.keys(response).length === 0){
            ctx.body= {
                status: ctx.response.status,
                message: 'No existe el usuario de id '+id
            }
        }else{
            ctx.body={
                status: ctx.response.status,
                token: response
            }
        }
    }else{
        ctx.response.status = 500
        ctx.body={
            status: ctx.response.status = 500,
            message: 'Credenciales incorrectas, intente nuevamente'
        }

    }
    
    return ctx
}


exports.getUser=(ctx)=>{
    let body = ctx.request.body
    let tokenConsulta= body.token
    let response = getUserAction.getUser(tokenConsulta)
    if(Object.keys(response).length === 0){
        ctx.body =  {
            status: 200, 
            message : 'No se encontró usuario'}
    }else{
        ctx.body =  {
            status: 200, 
            message : response}
    }

}

