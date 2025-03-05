export interface LogHeader {
    logHeaderId?:number;
    bussinesId:number;
    sucursalId:number;
    userId: number;
    transactionDate: Date;
    transactionTime: string;
    transactinType: string;
    comments: string;
}