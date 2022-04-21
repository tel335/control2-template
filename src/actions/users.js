import {KEY, SECRET} from '../utils/constants'

const tokens = require('../utils/uuid')
const user = require('../data/users')
const users = user.getUsers();

exports.getTok = (id, key, secret) => {
    let token = {}
    if (key == KEY) {
        if (secret == SECRET){
            users.forEach(user => {
                if (id == user.id){
                    token = tokens.getUUIDV4();
                    //lo que haria para enlaazar el token al usuario seria crear un arreglo de dos dimensiones en donde cada elemento tenga un id y el token correspondiente
                    //Esto permitiria tener un metodo de busqueda de usuarios con el token (como un hash)
                    //No me quedo tiempo para hacerlo pero esa es mi idea
                }
            });
        }
    }
    return token
}