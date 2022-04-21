import Router from 'koa-router'
import getHealth from './health/health'
import {KEY, SECRET} from '../utils/constants'
const Token = require('../utils/uuid')

const router = new Router()

router.get('/health', getHealth)

const users= require ('../data/users')
const listusers =users.getUsers()

function returnToken(ID,k,s){
    listusers.forEach(listusers => {
       if(listusers.id===ID){
        if(KEY===k && SECRET===s){
            const token = Token.getUUIDV4().toString()
            return token
        }
        }
    });
}

//returnToken(10000, "tel335", "f68747ae-731f-46f6-92a8-c21180ff7b59")


export default router
