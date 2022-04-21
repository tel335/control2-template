import Router from 'koa-router'
import getHealth from './health/health'
import token from './token/token'
import user from '../routes/user/user'

const router = new Router()

router.get('/health', getHealth)

router.get('/get-token/:key/:secret/:id', token.getToken)

router.get('/get-user/:token',user.getUser)

export default router
