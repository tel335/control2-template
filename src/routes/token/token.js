import { KEY, SECRET } from '../../utils/constants'
import uuid from '../../utils/uuid'

let secret = SECRET
let key = KEY
let token = uuid.getUUIDV4()
let id = 10

export default function getToken(ctx) {
    if (secret == SECRET && key == KEY) {
        if (id >= 1 && id <= 10000) {
            ctx.body = {
                status: 200,
                message: 'ok',
                token: token,
                id: id }
        } else {
            ctx.body =  {
                status: 200, 
                message : 'id inválida'}
        }
    } else {
        ctx.body =  {
            status: 500, 
            message : 'Parámetros key o secret no corresponden'}
    }
}
