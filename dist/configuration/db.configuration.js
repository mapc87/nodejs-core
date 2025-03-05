"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const config_configuration_1 = require("@configuration/config.configuration");
const access = {
    host: config_configuration_1.DB_HOST,
    user: config_configuration_1.DB_USER,
    password: config_configuration_1.DB_PASSWORD,
    port: typeof (config_configuration_1.DB_PORT) != "undefined" ? parseInt(config_configuration_1.DB_PORT) : 0,
    database: config_configuration_1.DB_DATABASE,
    timezone: 'local'
};
const db = promise_1.default.createPool(access);
exports.default = db;
