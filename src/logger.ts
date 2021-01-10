import pino from 'pino'

const isDev = process.env.NODE_ENV === 'development'
const level = process.env.LOG_LEVEL

export const logger = pino({ prettyPrint: isDev, level })
