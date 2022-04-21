import Router from 'koa-router'
import getHealth from './health/health'
import users from './usuarios/users.route'

const router = new Router()

router.get('/health', getHealth)
router.post('/get-token', users.getToken)
router.get('/get-user/:token',users.getUser)

export default router
