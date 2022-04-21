import Router from 'koa-router'
import getHealth from './health/health'
import getToken from './users/users.route'
const router = new Router()

router.get('/health', getHealth)
router.get('/token', getToken.getToken)
router.get('/user', getToken.getUser)
export default router
