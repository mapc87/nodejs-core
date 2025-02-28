"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("@configuration/config");
const access = {
    host: config_1.DB_HOST,
    user: config_1.DB_USER,
    password: config_1.DB_PASSWORD,
    port: typeof (config_1.DB_PORT) != "undefined" ? parseInt(config_1.DB_PORT) : 0,
    database: config_1.DB_DATABASE,
    timezone: 'local'
};
const db = promise_1.default.createPool(access);
exports.default = db;
