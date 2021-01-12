import { Context, Next } from 'koa'
import { logger } from '../logger'

export async function log(ctx: Context, next: Next) {
    try {
        await next()
    } finally {
        const { request, response } = ctx
        logger.debug({ request, response }, '%s %s', request.method, request.url)
    }
}
