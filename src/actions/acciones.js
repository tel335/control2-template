const token = require('../utils/uuid')
const usuarios = require('../data/users')
const constantes = require('../utils/constants')

let dataUsuarios = usuarios.getUsers()

exports.getToken = (id,secret,key) =>{
  
  if (secret != constantes.SECRET && key != constantes.KEY) {
    return false
  } else {
    const encontrar = dataUsuarios.find(function(element){
      return element.id == id
    })
    let numero = token.getUUIDV4()
    encontrar.token = numero
    return numero
  }

}

exports.getUser = (token) => {
  const encontrar = dataUsuarios.find(function(element){
    return element.token == token
  })

  return encontrar
}