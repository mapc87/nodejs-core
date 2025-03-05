import { Request, Response, NextFunction } from "express";

export interface ServerTypes{
    REQ?:Request;
    RES?:Response;
    NEXT?:NextFunction;
}