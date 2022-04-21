const response = require('koa/lib/response')
const acciones = require('../../actions/acciones')

exports.getToken = (ctx) => {
  let idUsuario = ctx.request.body.id
  let secret = ctx.request.body.secret
  let key = ctx.request.body.key
  let response = acciones.getToken(idUsuario,secret,key)
  if (response != false){
    ctx.body =  {
      status: 200,
      token: response
    }
  } else {
    ctx.body = {
      status : 404,
      message : 'secret, key o id incorrectos'
    }
  }
}

exports.getUser = (ctx) => {
  let token = ctx.params.token
  let response = acciones.getUser(token)
  if (typeof response === 'undefined'){
    ctx.body = {
      status: 204,
      message: 'token no encontrado'
    }
  }else{
    ctx.body = {
      status: 200,
      User: response
    }
  }
}