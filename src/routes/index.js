const Router = require('koa-router')
const usuarios = require('./usuarios/usuarios')

const router = new Router()

router.post('/getToken', usuarios.getToken)
router.get('/getUser', usuarios.getUser)

export default router