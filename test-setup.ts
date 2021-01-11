import { db, init, stop } from './src/db'
import { migrate } from 'postgres-migrations'
import chai from 'chai'
import chaiSubset from 'chai-subset'
import chaiSinon from 'sinon-chai'
import sinon from 'ts-sinon'

import 'chai/register-expect'

chai.use(chaiSubset)
chai.use(chaiSinon)
Object.assign(global, { sinon })

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
