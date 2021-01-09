import { expect } from 'chai'
import { db, init, stop } from '../src/db'

suite('db')

test('should be ok', async function () {
    await init()
    expect(db).to.not.be.null

    const { rows } = await db.query('SELECT NOW()')
    expect(rows[0]?.now).to.be.a('Date')

    await stop()
    expect(db).to.be.null
})
