const userData = require('../data/users.js')
const token = require('../utils/uuid.js')
const config = require('../utils/constants.js')
KEY = config.KEY
SECRET = config.SECRET


exports.getToken = (id,secret,key) => {
    let response =  []
    
    const usuarios = userData.getUsers()
    usuarios.forEach((element) => {
        if(element.id == id &&  KEY == key && SECRET == secret){
            element.token = token.getUUIDV4()
            response.push(element)
            
        }   
    });
    return response.token
}