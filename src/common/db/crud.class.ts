import { Condition, KeyValue, Table } from "./crud.inteface";
import db from '@configuration/db'

export class ClsCrud{

    table = ""
    keyValues: KeyValue[] = []
    
    constructor(table:Table) {
        this.table = table.name; 
        this.keyValues = table.keyValues;     
    }

    async create(){
        const sql = this.#buildCreateSql();
        let [rows, fields] = await this.#executeQuery(sql)
    }

    async update(){
        // const sql = this.#buildUpdateSql();
        // let [rows, fields] = await this.#executeQuery(sql)
    }

    async delete(){
        // const sql = this.#buildDeleteSql();
        // let [rows, fields] = await this.#executeQuery(sql)
    }

    async #executeQuery(sql: string){
        let [rows , fileds] = await db.query(sql)
        return [rows, fileds]
    }

    #buildCreateSql(): string {
        
        let fields = "";
        let values = "";

        if (this.keyValues.length > 0){

            fields += `(`
            values += `(`

            this.keyValues.forEach((k, index )=> {
                fields += `"${k.name}"`
                values += this.#convertValueToDataType(k.value)              
                if(index + 1 < this.keyValues.length){
                    fields += `, `
                    values += `, `
                }else{
                    fields += `) `
                    values += `) `
                }
            })
        }

        let sql = `INSERT INTO ${this.table} ${fields} VALUES ${values}`

        return sql; 
    }


    #buildUpdateSql(conditions:Condition[]): string {

        let values = ""; 
        let whereStatment = "";       

        if (this.keyValues.length > 0){
            this.keyValues.forEach((k, index )=> {
                values += `"${k.name}" =  `
                values += this.#convertValueToDataType(k.value)                

                if(index + 1 < this.keyValues.length){
                    values += `, `
                }
            })
        }

        if (conditions.length > 0){
            conditions.forEach((c)=> {

                let conditionValue: string|number|boolean|Date;

                if(typeof c.condtionValue )

                whereStatment += ` ${c.conditionField} ${c.condition} ${c.condtionValue} ${c.connector.length > 0 ? c.connector : ""}`
               
            })
        }

        let sql = `UPDATE ${this.table} SET ${values} WHERE ${whereStatment}`

        return sql; 
    }

    #convertValueToDataType(value: string|number|boolean|Date):string{
        let returnValue = "";

        switch (value) {
            case (typeof value === "string"):
                returnValue += `"${value}"`
                break;
            case (typeof value === "boolean"):
                returnValue += `${value?1:0}`
                break;
            case (typeof value === "number"):
                returnValue += `${value}`
                break;
            case (typeof value === "object"):
                returnValue += `STR_TO_DATE ('${value}', '%d-%m-%Y')`
                break;
            default:
                break;
        }
        return returnValue;
    }

    #buildDeleteSql(values : string , conditions:string): string {       
        if (conditions.length > 0){
            return `DELETE ${this.table}  WHERE ${conditions}`
        }
        return "";
    }




}