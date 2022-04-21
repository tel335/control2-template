import Router from 'koa-router'
import getHealth from './health/health'
import users from './user/user'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/users', users.getAllUsers)
router.get('/api/gettoken', users.getToken)
router.get('/api/getuser', users.getUser)

export default router
