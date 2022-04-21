import Router from 'koa-router'
import getHealth from './health/health'
import getToken from './token/token'

const router = new Router()

router.get('/health', getHealth)
router.get('/token/:id/:secret/:key', getToken.getToken)

export default router
