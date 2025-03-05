import { Address } from './address.inteface';
import { Telephone } from './telephone.interface';

export interface Sucursal {
    idBussines: number;
    idSucursal: number;
    name:string;
    address: Address
    telephone?: Telephone[];     
}