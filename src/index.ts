import { app } from './app'
import * as database from './db'

const dieOn = (why: string) =>
    process.on(why, ex => {
        console.error('\n%s\n%s\n\n', new Date().toISOString(), why, ex, '\n')
        process.exit(1)
    })

dieOn('unhandledRejection')
dieOn('uncaughtException')

// 🚀 run!
;(async function main() {
    await database.init()

    app.listen(process.env.PORT, function () {
        console.log('running on port ', process.env.PORT)
    })
})()
