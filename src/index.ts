import { app } from './app'
import { logger } from './logger'
import * as database from './db'

const dieOn = (why: string) =>
    process.on(why, err => {
        logger.fatal({ err }, why)
        process.exit(1)
    })

dieOn('unhandledRejection')
dieOn('uncaughtException')

// 🚀 run!
;(async function main() {
    await database.init()

    const port = process.env.PORT
    app.listen(port, function () {
        logger.info({ port }, 'Application started')
    })
})()
