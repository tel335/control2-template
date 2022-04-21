import koa from 'koa'
import bodyParser from 'koa-body'
import router from './routes/index'
import getAllToken from './routes/token/token'

const app = new koa()
const port = 3002

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())


router.put('/api/user/:id/:secret/:key', getAllToken)

app.listen(3002, () => {
    console.log(`Server is running on port ${port}`)
})

