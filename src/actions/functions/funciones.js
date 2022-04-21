const UsuarioData = require('../../data/users')
const TokenData = require('../../utils/uuid')
const KeysData = require('../../utils/constants')

//Funcion para obtener el id
exports.takeDATA = (in_id, in_secret, in_key) =>{
    const object={
        obtainID: in_id.id,
        obtainSecret: in_secret.secret,
        obtainKey: in_key.key

    }
    const respuesta = []
    let usuarios = UsuarioData.getUsers()
    usuarios.forEach((element)=>{
        obj={}
        obj.id=element.id
        obj.name=element.name
        obj.email=element.email
        obj.bitcoinAddress=element.bitcoinAddress
        token = TokenData.getUUIDV4()
        obj.Token=token
        
        respuesta.push(obj)
        }
        
    )


        return respuesta
}


//get-user

exports.get_user = (in_id) =>{
    const object={
        obtainID: in_id.id,
        
    }
    const respuesta = []
    let usuarios = UsuarioData.getUsers()
    usuarios.forEach((element)=>{
        if (object.obtainID == element.id ){
            obj={}
            obj.id=element.id
            obj.name=element.name
            obj.email=element.email
            obj.bitcoinAddress=element.bitcoinAddress
           
            respuesta.push(obj)

        }
       
    })
     return respuesta
}