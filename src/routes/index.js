//import Router from 'koa-router'
import getHealth from './health/health'
import getToken from '../token/token'

const Router = require('koa-router')
const router = new Router()

router.get('/health', getHealth)
router.get('/token/:id/:secret/:key', getToken)
export default router
