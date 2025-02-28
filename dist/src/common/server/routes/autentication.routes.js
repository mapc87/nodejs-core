"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/autenticacion/login');
router.post('/autenticacion/verifySuperAdmin');
router.put('/autenticacion/actualizar-password');
router.put('/autenticacion/solicitud-actualizar-password');
exports.default = router;
//postLogInUser
//verifySuperAdmin
//putPasswordUsuario
//putPasswordResetRequest
