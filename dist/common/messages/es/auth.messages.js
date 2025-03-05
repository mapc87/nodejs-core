"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMessages = void 0;
let badCreedentials = 'Usuario o contraseña inválidos';
let tokenFailGenerate = 'Token no generado';
let userNotAuth = 'Usuario no autenticado';
let okSentPasswordReset = 'Solicitud de contraseña enviada';
let failPasswordReset = 'Falla al solicitar envío de contraseña';
let okUserAuth = 'Usuario Autenticado';
let sessionExpired = 'Sesión Inactiva';
let userNotActive = 'Usuario inactivo';
let userPasswordUpdated = 'Contraseña Actualizada';
let userFailPasswordUpdated = "falla al actualizar contraseña";
let oktoken = 'valid token';
let failtoken = 'Unauthorized: Invalid token';
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
