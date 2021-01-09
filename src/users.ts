import { db, format } from './db'

type User = { id: number; name: string }

export async function create(user: Omit<User, 'id'>) {
    const { rows } = await db.query(
        format('insert into users (name) values (%L) RETURNING id;', user.name)
    )
    return rows[0]?.id as number
}

export async function get(id: number) {
    const { rows } = await db.query<User>(format('select * from users where id = %L', id))
    return rows[0]
}

export async function list() {
    const { rows } = await db.query<User>('select * from users')
    return rows
}
