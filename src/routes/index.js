import Router from 'koa-router'
import getHealth from './health/health'
import getUsuario from './usuarios/usuariosroutes'

const router = new Router()

router.get('/health', getHealth)
router.get('/usuarios',getUsuario.MostrarTokenUsuarios)
router.get('/usuarios',getUsuario.MostrarUsuario)


export default router
