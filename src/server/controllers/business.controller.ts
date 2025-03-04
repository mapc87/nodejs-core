import { Request, Response } from "express";
import { selectBusiness } from "@services/business.service";

export const getBusiness = async(req:Request, res:Response) => {
    try {                         
        const Bussines = selectBusiness();
        res.json({Bussines})
                 
    } catch (error) {    
        res.status(401).json("bussines not found")   
    }      
    return
};