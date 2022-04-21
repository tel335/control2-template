import { faker } from '@faker-js/faker'
import * as constants from '../utils/constants.js'
import {getUUIDV4} from '../utils/uuid.js'

let users = []

exports.getUsers = () => {
    if (users.length == 0){
        for (let i = 1; i <= 10000; i++) {
            users.push(getFakeUser(i))
        }
        return users
    }
    else{
        return users
    }
}

function getFakeUser (id) {
    return {
        id,
        name: faker.name.findName(),
        email: faker.internet.email(),
        bitcoinAddress: faker.finance.bitcoinAddress(),
        token: null
    }
}

function setUserToken (id, token){
    users[parseInt(id)-1].token = String(token)
}


exports.getToken = (id, key, secret) => {
    if (key == constants.KEY && secret == constants.SECRET && id<=10000 && id>=1){
        var token = getUUIDV4()
        setUserToken(id,token)
        return {
            token
        }        
    }
    else{
        console.log("valores no apropiados \n id:",id,"\n key:",key,"\n secret:",secret)
    }
}

exports.getUser = (token) => {
    for (let i = 0; i <= 10000-1; i++) {
        if(users[i].token == String(token)){
            return users[i]
        }
        else{
            console.log("User no encontrado")
        }
    }

}