const userData = require('../data/users.js')
const Token = require('../utils/uuid.js')
const config = require('../utils/constants.js')
const KEY = config.KEY
const SECRET = config.SECRET


exports.getToken = (id,secret,key) => {
    let response =  []
    let aux = {}
    const usuarios = userData.getUsers()
    usuarios.forEach((element) => {
        if(element.id == id &&  KEY == key && SECRET == secret){
            element.token = Token.getUUIDV4()
            aux.token =   element.token
            response.push(aux)
            
        }   
    })
    return response
}