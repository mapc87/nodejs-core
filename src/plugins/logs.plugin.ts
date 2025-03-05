import { LogDetails } from "src/db/interfaces/log-details.inteface"
import { LogHeader } from "src/db/interfaces/log-header.inteface"

export class clsLogger {

    private header:LogHeader = {
        bussinesId: 0,
        sucursalId: 0,
        userId: 0,
        transactinType: "",
        comments: "",
        transactionDate: new Date(),
        transactionTime: ""
    }

    private details: LogDetails = {
        log_header_id: 0,
        oldValue: 0,
        newValue: 0
    }


    constructor() {

    }

    logTransaction(addDetails:boolean){        
        let header = this.#addHeader(this.header)

        if(addDetails)
        {
            let details = this.#addDetails
        }
    }

    #addHeader(header:LogHeader){

    }

    #addDetails(){
        
    }


   


}