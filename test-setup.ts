import { db, init, stop } from './src/db'
import { migrate } from 'postgres-migrations'

import 'chai/register-expect'

const isFunc = process.env.FUNCTIONAL === 'true'

if (isFunc) {
    before(async function () {
        await init()
        await migrate({ client: db }, 'migrations')
    })

    afterEach(async function () {
        await db.query('truncate table users')
    })

    after(async function () {
        await stop()
    })
}
