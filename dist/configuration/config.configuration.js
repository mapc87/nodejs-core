"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE_FAIL = exports.MESSAGE_OK = exports.KEY = exports.URL_PASSWORD_RESET = exports.MAIL_PORT = exports.MAIL_SECURE_CONNECTION = exports.MAIL_HOST = exports.MAIL_PASSWORD = exports.MAIL = exports.DB_PASSWORD = exports.DB_USER = exports.DB_DATABASE = exports.DB_PORT = exports.DB_HOST = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//Database Configuration
exports.PORT = process.env.PORT || 3000;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = process.env.DB_PORT;
exports.DB_DATABASE = process.env.DB_DATABASE;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
//Mail Configuration
exports.MAIL = process.env.MAIL;
exports.MAIL_PASSWORD = process.env.MAIL_PASSWORD;
exports.MAIL_HOST = process.env.MAIL_HOST;
exports.MAIL_SECURE_CONNECTION = process.env.MAIL_SECURE_CONNECTION;
exports.MAIL_PORT = process.env.MAIL_PORT;
//Url Password Reset
exports.URL_PASSWORD_RESET = process.env.URL_PASSWORD_RESET;
exports.KEY = process.env.KEY;
//Messages
exports.MESSAGE_OK = { status: "OK", message: "" };
exports.MESSAGE_FAIL = { status: "FAIL", message: "Usuario no autenticado" };
