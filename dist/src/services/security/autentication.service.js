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
const AutenticarUsuario = (usuarioCredenciales) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const credenciales = yield ObtenerPasswordUsuario(usuarioCredenciales.email);
        if (!credenciales)
            reject(failMessage(authObjMessages.badCreedentials));
        const isValidPassword = yield clsHashPassword.isValidPassword(usuarioCredenciales.password, credenciales.password);
        if (!isValidPassword)
            reject(failMessage(authObjMessages.badCreedentials));
        const authtenticatedUser = yield ObtenerUsuarioAutenticado(credenciales.idUsuario);
        if (!authtenticatedUser.estado)
            reject(failMessage(authObjMessages.userNotActive));
        resolve(authtenticatedUser);
    }));
});
exports.AutenticarUsuario = AutenticarUsuario;
