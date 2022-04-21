import Router from 'koa-router'
import getHealth from './health/health'
import postToken from './health/health'

const router = new Router()


router.get('/health', getHealth)
router.post('/health', postToken)


export default router
