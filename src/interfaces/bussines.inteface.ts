import { Address } from "./address.inteface";
import { Sucursal } from "./sucursal.interface";
import { Telephone } from "./telephone.interface";

export interface Bussines {
    idBussines: number;
    name: string;
    nit: string; 
    addres?: Address;
    phone?: Telephone[];
    sucursals?: Sucursal[];
} 

