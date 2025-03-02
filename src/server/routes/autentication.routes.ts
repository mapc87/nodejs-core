import {login } from "@controllers/autentication.controller";
import { Router, Request, Response} from "express";

const router = Router()

router.get('/autentication', login)
router.post('/autentication/login')
router.post('/autentication/verifySuperAdmin', )
router.put('/autentication/actualizar-password', )
router.put('/autentication/solicitud-actualizar-password', )

export default router

//postLogInUser
//verifySuperAdmin
//putPasswordUsuario
//putPasswordResetRequest