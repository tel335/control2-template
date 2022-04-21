import userFunctions from '../../actions/user/userAction'
import data from '../../data/users'
import {KEY, SECRET} from '../../utils/constants'

let usuarios = data.getUsers()

exports.getToken = (ctx) => {
    let id = ctx.params.id
    let key = String(ctx.params.key)
    let secret = String(ctx.params.secret)
    
    if (key === String(KEY) && secret === String(SECRET)) {        
        let user = userFunctions.getTokenbyUser(id,usuarios)
        ctx.response.body = {
            "token": user.token
        }
        return 1
    }
    else{
        ctx.body = {
            status: 401,
            message: 'ERROR, petición no autorizada: Revise la validación de las llaves.'
        }     
        return 0   

    }
}

exports.getTokenbyUser =  (ctx) => {
    let tokenRecibido = String(ctx.params.token)    
    let usuarioResponse = userFunctions.getUserByToken(usuarios,tokenRecibido)
    const usuario = {
        id: usuarioResponse[0].id,
        name: usuarioResponse[0].name,
        email: usuarioResponse[0].email,
        bitcoinAddress: usuarioResponse[0].bitcoinAddress
    }    
    ctx.response.body = {
        Usuario: usuario
    }
}