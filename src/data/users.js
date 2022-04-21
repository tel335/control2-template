import { faker } from '@faker-js/faker'

const tkn = require('../utils/uuid')
const cte = require('../utils/constants')
const idf = datausuarios.find(function(elements){      //Buscando y guardando el id del usuario.
    return elements.id == idf
})


exports.getToken = (id, secreto ,llave) => {       //Obtener el token a traves de parametros: id, secreto y llave
    if(secreto == cte.SECRET && llave == cte.KEY && id == idf){    //Busco si coinciden los 3 parametros de entradas
        user.tkn = tkn
        ctx.body = {message: `token ${tkn}`}
        return ctx
    }
    else {
        return false
    }

}

exports.getUser = (tkn) => {
    return {
        tkn : 'tkn',
        datos : getFakeUser(id)
    }
}


exports.getUsers = () => {
    const users = []
    for (let i = 1; i <= 10000; i++) {
        users.push(getFakeUser(i))
    }
    return users
}

function getFakeUser (id) {
    return {
        id,
        name: faker.name.findName(),
        email: faker.internet.email(),
        bitcoinAddress: faker.finance.bitcoinAddress()
    }
}
