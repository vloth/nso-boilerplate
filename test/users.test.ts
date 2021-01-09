import { expect } from 'chai'
import { create, get, list } from '../src/users'

suite('#users repository')

test('create & get users', async function () {
    const name = 'vloth'

    const id = await create({ name })
    expect(id).to.be.greaterThan(0)

    const user = await get(id)
    expect(user).to.be.eql({ id, name })
})

test('list all users', async function () {
    const users = await list()
    expect(users).to.be.empty
})
