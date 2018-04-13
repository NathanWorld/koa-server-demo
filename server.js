import Koa from 'koa'
import cors from 'koa2-cors'
import router from './routers/router'

const app = new Koa()
// 支持跨域请求
app.use(cors())
app.use(router.routes(), router.allowedMethods())

app.listen(3000)