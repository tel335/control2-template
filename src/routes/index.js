import Router from 'koa-router'
import getHealth from './health/health'
import token from './../actions/user/user'

const router = new Router()

router.get('/health', getHealth)
router.get('/token/:id/:secret/:key', token.getToken)


export default router
