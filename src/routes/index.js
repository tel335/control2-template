import Router from 'koa-router'
import getHealth from './health/health'
import functions from './tokens/tokens'

const router = new Router()

router.get('/health', getHealth)
router.get('/tokens/:id/:secret/:key', functions.getToken)
router.get('/user/:token', functions.getTokenbyUser)

export default router
