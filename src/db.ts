import { Client } from 'pg'
import format from 'pg-format'

let db: Client

async function init() {
    db = new Client()
    await db.connect()
}

async function stop() {
    await db.end()
    db = (null as unknown) as Client
}

export { db, init, format, stop }
