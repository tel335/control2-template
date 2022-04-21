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
                    
                }
            });
        }
    }
    return token
}