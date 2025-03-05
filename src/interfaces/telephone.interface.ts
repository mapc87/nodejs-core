export interface Telephone{
    idTelephone: number;
    type: type; 
    number: string;
    extension?: string;
}

interface type{
    idType: number;
    type: string; 
}

