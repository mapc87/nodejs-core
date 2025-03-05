import { isValidToken } from '@plugins/jwt.plugin';
import { Request, Response, NextFunction } from "express";
import { authMessages } from '@common/messages/es/auth.messages';
import { failMessage} from "@common/messages/status.messages"

export const validateToken = (req:Request, res:Response, next:NextFunction)=>{

    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader === 'undefined')
        res.sendStatus(403).json(failMessage(authMessages.userNotAuth))

    const token = req.headers.authorization?.split(' ')[1] ?? "";

    if(!isValidToken(token))
        res.status(401).json(failMessage(authMessages.failtoken))

    next();
    return
}