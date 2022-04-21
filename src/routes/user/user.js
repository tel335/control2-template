import { status } from 'koa/lib/response'
import usersActions from '../data/users'

exports.getToken = (ctx) => {
    let idUser = ctx.request.body.id
    let secrets = ctx.request.body.secret
    let key = ctx.request.body.key
    let token = ctx.params.token
    let response =usersActions.getToken(idUser,secrets,key)
    if (response == false){    //codigos de respuesta obtenidos de: https://developer.mozilla.org/es/docs/Web/HTTP/Status
        ctx.body = {
            status : 401,
            message : 'Autentificacion incorrecta.'
        }
    }
    else {        
        const tkn = require('../utils/uuid')
        if (token !=tkn){
            ctx.body = {
                status : 204,              //opcion posible 205
                message : 'Error con el Token, no se ha retornado segun solicitud'
            }
        }
        else{
            ctx.body = {
                status : 200,
                message : 'Solicitud realizada con exito'
            }
        }
    }

}
