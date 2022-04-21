import Router from 'koa-router'
import getHealth from './health/health'
import users from "./user"

const router = new Router()

router.get('/health', getHealth)

router.post('/api/user', users.getToken) //buscando a traves del id, secret y key: encuentra el token
router.get('/api/user', users.getUser) //a traves del token busca los datos del user.

export default router
