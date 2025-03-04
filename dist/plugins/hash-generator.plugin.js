"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.generateHashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateHashPassword = (password) => {
    return new Promise((resolve) => {
        const saltRounds = 8;
        bcryptjs_1.default.hash(password, saltRounds, function (err, hash) {
            resolve(hash);
        });
    });
};
exports.generateHashPassword = generateHashPassword;
const verifyPassword = (password, passwordDb) => {
    return new Promise((resolve) => {
        bcryptjs_1.default.compare(password, passwordDb, function (err, result) {
            resolve(result);
        });
    });
};
exports.verifyPassword = verifyPassword;
