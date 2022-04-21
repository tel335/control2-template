import Router from 'koa-router'
import getHealth from './health/health'
import getToken from './token/token'
import getUser from './user/user'

const router = new Router()

router.get('/health', getHealth)
router.post('/get-token', getToken)
router.post('/get-user', getUser)

export default router
