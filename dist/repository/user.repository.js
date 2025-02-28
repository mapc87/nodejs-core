"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbGetUser = void 0;
const db_1 = __importDefault(require("@configuration/db"));
const dbGetUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = `SELECT 
                        u.id_user as idUser,
                        u.name as name,
                        u.email as email,
                        u.password
                    FROM 
                        user u
                    WHERE
                        u.email = '${email}'
                    `;
    const [rows] = yield db_1.default.query(sqlQuery);
    console.log(rows);
    return rows;
});
exports.dbGetUser = dbGetUser;
