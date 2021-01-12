import Koa from 'koa'
import { logger } from './logger'
import * as middlewares from './middleware'

export const app = new Koa()

app.use(middlewares.log)
app.use(middlewares.error).on('error', function (err, { request, response }) {
    logger.error({ err, request, response }, 'Internal Server Error')
})

app.use(ctx => {
    ctx.body = 'Hello Koa'
})
