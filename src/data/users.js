import { faker } from '@faker-js/faker'
import uuid from '../utils/uuid'
import { KEY } from '../utils/constants'
import { SECRET } from '../utils/constants';

const false_DataBase = {};

exports.getUsers = () => {
    const users = []
    for (let i = 1; i <= 10000; i++) {
        users.push(getFakeUser(i))
    }
    return users
}

function getFakeUser(id){
    return {
        id,
        name: faker.name.findName(),
        email: faker.internet.email(),
        bitcoinAddress: faker.finance.bitcoinAddress()
    }
}

//Asumimos que el usuario puede tener mas de un token, guardamos cada token en un arreglo asociado a su id por medio de un diccionario
//Idealmente esto se haria con una base de datos.
exports.linkToken = (body) => {
    let id = body.id;
    let token = uuid.getUUIDV4();
    if(false_DataBase[id]){
        false_DataBase[id].push(token);
    }else{
        false_DataBase[id] = [];
        false_DataBase[id].push(token);
    }
    return {"token": token};
};

exports.tokenSeeker = (token) => {
    let kiss = Object.keys(false_DataBase);
    let idUser = 0;
    kiss.forEach(element => {
        false_DataBase[element].forEach(elementNest => {
            if(elementNest == token){
                idUser = element; //La Id del dueño del token
            }
        })
    })
    if(idUser == 0){
        return "Usuario no existe"
    }else{
        return idUser;
    }
};

exports.keyChecker = (body) => { //Revisa que todos los parametros clave esten correctos
    let id = body.id;
    if(1 > id || 10000 < id){
        return false;
    }
    let k = body.key;
    let s = body.secret;
    if(k == KEY && s == SECRET){
        return true;
    }else{
        return false;
    }
}