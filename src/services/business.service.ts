import { Condition} from "src/db/interfaces/db.inteface";
import { Bussines } from "@interfaces/bussines.inteface";
import { ClsDbService} from "src/db/db.service.class";

const dbService = new ClsDbService("BUSSINES");

export const selectBusiness = ()=>{
    let conditions: Condition[] = [{
        conditionField: "idBusiness", 
        condition: "=", 
        condtionValue: 1,
        connector: "AND"
    },
    {
        conditionField: "name", 
        condition: "LIKE", 
        condtionValue: "restaurant",
        connector: ""
    }]

    return dbService.select(undefined,conditions)
}


export const createBusiness = ()=>{
    const Business:Bussines = {
        idBussines: 1,
        name: "Miguel",
        nit: "43098258",
    }
}

export const updateBusiness = ()=>{
    const Business = {
        idBussines: 2,
        name: "Miguel Angel",
        nit: "43098258"
    }

    let conditions: Condition[] = [{
        conditionField: "idBusiness", 
        condition: "=", 
        condtionValue: 1,
        connector: "AND"
    },
    {
        conditionField: "name", 
        condition: "LIKE", 
        condtionValue: "restaurant",
        connector: ""
    }]
}

export const activateInactiveBusiness = ()=>{
    
}

export const deleteBusiness = ()=>{
    
}


