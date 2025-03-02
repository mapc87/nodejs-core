import { Request, Response } from "express";
import { singInUser } from "@services/security/autentication.service";
import { generateToken } from "@plugins/jwt.plugin";
import { user } from "@interfaces/user.inteface";

export const login = async(req:Request, res:Response) => {
    try {              
        const user:user = await singInUser({email: 'miguel', password: '123456'})

        if(typeof user === 'undefined')
            res.status(401).json({message: 'invalid credentials'})
        
        const token = generateToken(user.userId)
        res.json({token})
                 
    } catch (error) {    
        res.status(401).json("user not found")   
    }  
    
    return
};

export const logout= async(req:Request, res:Response) => {
    try {              
        const user:user = await singInUser({email: 'miguel', password: '123456'})

        if(typeof user === 'undefined')
            return res.status(401).json({message: 'invalid credentials'})
        
        const token = generateToken(user.userId)
        res.json({token})
                 
    } catch (error) {    
        res.status(401).json("user not found")   
    }    
};