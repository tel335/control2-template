const token = require('../../utils/uuid')
const actions = require('../../actions/user.action')

exports.getToken= (ctx)=>{
    let idUser = ctx.request.body.id
    let secret = ctx.request.body.secret
    let key = ctx.request.body.key
    let response= actions.getToken(idUser,secret,key)
    if(response != false){
        ctx.body={
            status:200,
            token: response
        }
    }
    else{
        ctx.body={
            status:404,
            message:'id o key incorrectos'
        }
    }
}


exports.getUser= (ctx)=>{
let token=ctx.params.token
let response = actions.getUser(token)
if (typeof response =='undefined' ){
    ctx.body = {
    status:204 ,
    message: 'token not found'
}
}
}