import { Context, Next } from 'koa'

export async function error(ctx: Context, next: Next) {
    try {
        await next()
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500
        ctx.body = 'Internal Server Error'
        ctx.app.emit('error', err, ctx)
    }
}
