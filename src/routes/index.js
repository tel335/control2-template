import Router from 'koa-router'
import getHealth from './health/health'
import users from './users/users.route'

const router = new Router()

router.get('/health', getHealth)
router('/users',users.getUser)
router('/token',users.getToken)

export default router
