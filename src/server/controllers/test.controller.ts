import {  Request, Response } from "express";
import { addTest, selectTest, updateTest, removeTest} from "@services/test.service"

export const getTest = async(req:Request, res:Response) => {
    try {              
        let result = addTest() 
        res.json(result)
    } catch (error) {    
  
    }  
    
    return
};

export const postTest= async(req:Request, res:Response) => {
    try {              
        let result =  addTest()
        res.json(result)
    } catch (error) {    
        
    }    
};

export const putTest= async(req:Request, res:Response) => {
    try {              
       let result = updateTest() 
       res.json(result)
    } catch (error) {    
        
    }    
};

export const deleteTest= async(req:Request, res:Response) => {
    try {              
        let result = removeTest()
        res.json(result) 
    } catch (error) {    
        
    }    
};