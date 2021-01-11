import * as users from './users'
import * as service from './user-service'

suite('user service')

test('should return all users names', async function () {
    const allUsers = [
        { id: 1, name: 'john' },
        { id: 2, name: 'doe' }
    ]

    sinon.replace(users, 'list', () => Promise.resolve(allUsers))
    const usernames = await service.allUsernames()

    expect(usernames).to.be.eql(allUsers.map(u => u.name).join(', '))
})
