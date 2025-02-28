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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticarUsuario = void 0;
const user_repository_1 = require("@repository/user.repository");
const AutenticarUsuario = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const userInfo = yield (0, user_repository_1.dbGetUser)(credentials.email);
        // if(!userInfo)
        //     reject(failMessage(authObjMessages.badCreedentials))
        // const isValidPassword = await clsHashPassword.isValidPassword(usuarioCredenciales.password, credenciales.password)
        // if(!isValidPassword)
        //     reject(failMessage(authObjMessages.badCreedentials))
        // const authtenticatedUser = await ObtenerUsuarioAutenticado(credenciales.idUsuario)
        // if(!authtenticatedUser.estado)
        //     reject(failMessage(authObjMessages.userNotActive))
        resolve(userInfo);
    }));
});
exports.AutenticarUsuario = AutenticarUsuario;
