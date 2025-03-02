import jwt from 'jsonwebtoken'
import {KEY} from '@configuration/config'

const JWT_SECRET = typeof KEY != 'undefined'? KEY: 'T3mp0r@lK3Y';

export const generateToken  = (userId: number): string => {
    return jwt.sign({userId}, JWT_SECRET, {expiresIn: '1h'}  );
}

export const isValidToken  = (token: string):boolean => {
    jwt.verify(token, JWT_SECRET, (err, decoded)=> {
        if(err)
            return false; 
        
        return true;
    })
     
    return true;
}