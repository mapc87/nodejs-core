"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_configuration_1 = require("@configuration/config.configuration");
const JWT_SECRET = typeof config_configuration_1.KEY != 'undefined' ? config_configuration_1.KEY : 'T3mp0r@lK3Y';
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const isValidToken = (token) => {
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
        if (err)
            return false;
        return true;
    });
    return true;
};
exports.isValidToken = isValidToken;
