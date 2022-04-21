import Router from 'koa-router'
import getHealth from './health/health'
import tokenLogic from './token/tokens'

const router = new Router()

router.get('/health', getHealth)
router.put('/api/get-token', tokenLogic.getToken); //El cuerpo del request debe contener el id del usuario, el key y el secret.
// ej. {
//    "id": 1,
//   "key":"tel335",
//    "secret": "f68747ae-731f-46f6-92a8-c21180ff7b59"
//}
router.get('/api/get-user/:token', tokenLogic.getUser); //Toma el token entero como parametro ej. http://localhost:3000/api/get-user/884e1493-893f-4ac2-9da7-3cb45d27e08f

export default router
