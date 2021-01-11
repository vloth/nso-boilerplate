import * as users from './users'

export async function allUsernames() {
    const allUsers = await users.list()
    return allUsers.map(u => u.name).join(', ')
}
