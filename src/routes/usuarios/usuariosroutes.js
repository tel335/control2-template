const UsuarioAction = require('../../actions/functions/funciones')
const KeysData = require('../../utils/constants')

exports.MostrarTokenUsuarios = (ctx) => {
    let body=ctx.request.body
    let id = ctx.request.body.id
    let key = ctx.request.body.key
    let secret = ctx.request.body.secret
    
    let response = UsuarioAction.takeDATA(id,secret,key)
    if(Object.keys(response).length === 0){
        ctx.body =  {
            status: 200, 
            cantidad: Object.keys(response).length,
            message : 'No se encontró el usuario buscado'}

    }else{
            if(key===KeysData.KEY && secret===KeysData.SECRET){
                ctx.body = {status: 200,
                            cantidad: Object.keys(response).length,
                            Usuario: response}
            }else(
                ctx.body =  {
                    status: 200, 
                    cantidad: Object.keys(response).length,
                    message : 'No se encontró el usuario buscado'}
            )
    }
    return ctx
}

exports.MostrarUsuario= (ctx) => {
    let id = ctx.request.body.id
   
    
    let response = UsuarioAction.get_user(id)
    if(Object.keys(response).length === 0){
        ctx.body =  {
            status: 200, 
            
            message : 'No se encontró el usuario buscado'}

    }else{
            if(key===KeysData.KEY && secret===KeysData.SECRET){
                ctx.body = {status: 200,
                            cantidad: Object.keys(response).length,
                            Usuario: response}
            }else(
                ctx.body =  {
                    status: 200, 
                    cantidad: Object.keys(response).length,
                    message : 'No se encontró el usuario buscado'}
            )
    }
    return ctx
}