import {config} from 'dotenv'

config()

//Database Configuration
export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST 
export const DB_PORT = process.env.DB_PORT 
export const DB_DATABASE = process.env.DB_DATABASE 
export const DB_USER = process.env.DB_USER 
export const DB_PASSWORD = process.env.DB_PASSWORD

//Mail Configuration
export const MAIL = process.env.MAIL
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD
export const MAIL_HOST = process.env.MAIL_HOST
export const MAIL_SECURE_CONNECTION = process.env.MAIL_SECURE_CONNECTION
export const MAIL_PORT = process.env.MAIL_PORT

//Url Password Reset
export const URL_PASSWORD_RESET = process.env.URL_PASSWORD_RESET
export const KEY = process.env.KEY

//Messages
export const MESSAGE_OK = { status : "OK", message : ""}
export const MESSAGE_FAIL = { status : "FAIL", message : "Usuario no autenticado"}

