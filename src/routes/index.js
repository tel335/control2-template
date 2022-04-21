import Router from 'koa-router'
import getHealth from './health/health'
const users = require('./User/user.route')


const router = new Router()

router.get('/health', getHealth)
router.get('/users/byptype/:id/:secret/:key', users.getToken)


export default router
