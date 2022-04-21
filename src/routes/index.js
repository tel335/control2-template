import Router from 'koa-router'
import getHealth from './health/health'
import getToken from './token/tokenn'
import getUser from './user/userr'

const router = new Router()

router.get('/health', getHealth)
router.get('/token', getToken)
router.get('/user', getUser)

export default router