import mysql2, { PoolOptions } from "mysql2/promise"
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from '@configuration/config.configuration'

const access: PoolOptions = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: typeof(DB_PORT) != "undefined"? parseInt(DB_PORT):0,
    database: DB_DATABASE,
    timezone:'local'
}

const db = mysql2.createPool(access)

export default db