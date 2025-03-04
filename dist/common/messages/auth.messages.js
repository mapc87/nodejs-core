"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMessages = void 0;
const badCreedentials = 'Usuario o contraseña inválidos';
const tokenFailGenerate = 'Token no generado';
const userNotAuth = 'Usuario no autenticado';
const okSentPasswordReset = 'Solicitud de contraseña enviada';
const failPasswordReset = 'Falla al solicitar envío de contraseña';
const okUserAuth = 'Usuario Autenticado';
const sessionExpired = 'Sesión Inactiva';
const userNotActive = 'Usuario inactivo';
const userPasswordUpdated = 'Contraseña Actualizada';
const userFailPasswordUpdated = "falla al actualizar contraseña";
const oktoken = 'valid token';
const failtoken = 'Unauthorized: Invalid token';
exports.authMessages = {
    badCreedentials,
    userNotAuth,
    tokenFailGenerate,
    okUserAuth,
    sessionExpired,
    okSentPasswordReset,
    failPasswordReset,
    userNotActive,
    userPasswordUpdated,
    userFailPasswordUpdated,
    oktoken,
    failtoken,
};
