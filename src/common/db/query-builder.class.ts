import { Condition, KeyValue } from './db.inteface';

export class ClsQueryBuilder
{    
    private open = " ( ";
    private close = " ) ";
    private comma = ", ";
    private asterisk = "*";
    private emptySpace = "";
    private tableName:string; 

    constructor(tableName:string) {
        this.tableName = tableName
    }
  
    getSqlSelect(fields?:string[], condition?:Condition[]):string {
        let keyValues = [];
        let keyNames = "";

        if(fields){
            keyValues = this.#setkeyNames("",fields)  
            keyValues.forEach((k,index)=>{
                keyNames += `${k}`; 
                keyNames += index < keyValues.length? this.comma : this.emptySpace;
            })          
        }else{
            keyNames = this.asterisk
        }          

        let sql = `SELECT ${keyNames} FROM ${this.tableName}`;

        if(condition) 
        {
            let whereStatment = this.#getStrWhere(condition);
            sql += ` WHERE ${whereStatment}`
        } 

        return sql;    
    }

    getSqlCreate(object: Object):string {
        let keyValues = this.#getkeyValues(object)

        let sql = "";
        let fields = "";
        let values = "";

        if (keyValues.length > 0){

            fields += this.open
            values += this.open

            keyValues.forEach(async (k, index )=> {
                fields += `${k.name}`                
                values += `${this.#convertValueToSpecificType(k.value)}`
   
                if(index + 1 < keyValues.length){
                    fields += this.comma
                    values += this.comma
                }else{
                    fields += this.close
                    values += this.close
                }
            })
            sql = `INSERT INTO ${this.tableName} ${fields} VALUES ${values}`
        }    
        return sql;    
    }

    getSqlUpdate(object: Object,conditions:Condition[]): string {
        let keyValues:KeyValue[] = this.#getkeyValues(object)
        let values = ""; 
        let whereStatment = "";       

        if (keyValues.length > 0){
            keyValues.forEach((k, index )=> {
                values += `${k.name} =  `
                values += this.#convertValueToSpecificType(k.value)                

                if(index + 1 < keyValues.length){
                    values += `${this.comma} `
                }
            })
        }
        
        whereStatment = this.#getStrWhere(conditions);      

        let sql = `UPDATE ${this.tableName} SET ${values} WHERE ${whereStatment}`

        return sql; 
    }

    getSqlDelete(conditions:Condition[]): string {  
        const whereStatment = this.#getStrWhere(conditions)       
        if (conditions.length > 0){
            return `DELETE ${this.tableName}  WHERE ${whereStatment}`
        }
        return this.emptySpace;
    }

    getSqlActiveUnactiveRow(action: boolean, conditions:Condition[]): string {  
        const activeRow = action? 1: 0 ; 
        const whereStatment = this.#getStrWhere(conditions); 
        if (conditions.length > 0){
            return `UPDATE ${this.tableName} SET ACTIVE = ${activeRow}  WHERE ${whereStatment}`
        }
        return this.emptySpace;
    }

    #getStrWhere(conditions:Condition[]):string{
        let whereStatment = "";
        let conditionsList:string[] = [];
        
        conditions.forEach(c => {
            conditionsList.push(c.conditionField)
        })

        let keyValues = this.#setkeyNames(undefined, conditionsList)

        if (conditions.length > 0){
            conditions.forEach((c,index)=> {
                whereStatment += ` ${keyValues[index]} ${c.condition} ${this.#convertValueToSpecificType(c.condtionValue)} ${c.connector}`               
            })
        }
        return whereStatment;
    }

    #getkeyValues(object: Object):KeyValue[]{
        let keys = this.#setkeyNames(object);
        let values = Object.values(object);
        let keyValues: KeyValue[] = []

        keys.forEach((k, index) => {
            keyValues.push({
                name: k,
                value: values[index]
            })
        });

        return keyValues;
    }

    //changes key value to db field name convention adding underscode istead uppercase letter
    #setkeyNames = (object?: Object, keysList?:string[]):string[]=>{ 
        
        let  keys:string[] = [];
        
        if(object){
             keys = Object.keys(object);
        }else if(keysList){
            keys = keysList;
        }

       if(keys.length > 0 ){
            keys.forEach((k, index )=>{        
    
            let dbField = ""
            
            for(let i = 0; i < k.length; i++){
                if (k[i].toLocaleUpperCase() == k[i])
                {
                   k = (k.replace(k[i],`_${k[i].toLocaleLowerCase()}`))
                   dbField = k
                }           
                
                if(dbField)
                keys[index] = dbField;
                }   
            })
       }
        return keys
    }
    
    #convertValueToSpecificType =  (value: string|number|boolean|Date): string => {        
        let returnValue = "";
        switch (typeof value) {
            case "string":
                returnValue += `"${value}"`
                break; 
            case "boolean":
                returnValue += `${value?1:0}`
                break;
            case "number":
                returnValue += `${value}`
                break;
            case  "object":
                returnValue += `STR_TO_DATE ('${value}', '%d-%m-%Y')`
                break;
            default:
                break;
        }            
        return returnValue
    }
}