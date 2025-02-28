"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autentication_controller_1 = require("@controllers/autentication.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/autentication', autentication_controller_1.login);
router.post('/autentication/login', autentication_controller_1.login);
router.post('/autentication/verifySuperAdmin');
router.put('/autentication/actualizar-password');
router.put('/autentication/solicitud-actualizar-password');
exports.default = router;
//postLogInUser
//verifySuperAdmin
//putPasswordUsuario
//putPasswordResetRequest
