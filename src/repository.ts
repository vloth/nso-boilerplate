import { db, format } from './db'

type User = { id: number; name: string }

export async function getUser(id: number) {
    const res = await db.query<User>(format('select * from user where id = %L', id))
    return res.rows[0]
}
