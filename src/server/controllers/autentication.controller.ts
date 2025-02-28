import { Request, Response } from "express";
import { AutenticarUsuario } from "@services/security/autentication.service";

export const login = async(req:Request, res:Response) => {
    try {              
        const user = await AutenticarUsuario({email: 'miguel', password: '123456'})
        // sign(user, KEY, {expiresIn: "4h"},  async (err, token)=>{               
        //     if(err) { 
        //         res.status(401).json(await failMessage(authObjMessages.tokenFailGenerate))
        //     }                
        //     res.json({status : ok, token, user}) 
        // })                    
    } catch (error) {    
        res.status(401).json("user not found")   
    }    
};