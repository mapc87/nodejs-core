import { Condition } from './interfaces/db.inteface';
import { ClsQueryBuilder } from './query-builder.class';
import db from '@configuration/db.configuration'
import { ResultSetHeader } from 'mysql2';

export class ClsDb{

    table = "";
    private queryBuilder; 
    
    constructor(tableName: string) {
        this.table = tableName; 
        this.queryBuilder = new ClsQueryBuilder(tableName);
    }

    async select(fields?: string[], condition?: Condition[]){
        const sql = this.queryBuilder.getSqlSelect(fields, condition);
        // let [rows, fields] = await this.#executeQuery(sql)
        console.log(sql)
        return sql;
    }



    async insert(object: Object){
        const sql = this.queryBuilder.getSqlInsert(object);
        // let [rows, fields] = await this.#executeQuery(sql)
        console.log(sql)
        return sql;
    }

    async multipleInsert(objects:object[]){
        if(objects.length> 1){
            objects.forEach(async(o)=>{
                let sql = this.queryBuilder.getSqlInsert(o);
                //let [rows, fields] = await this.#executeQuery(sql)
                
            })            
        }   
        return 
    }

    async update(object: Object,conditions:Condition[]){       
        const sql = this.queryBuilder.getSqlUpdate(object,conditions);        
        // let [rows, fields] = await this.#executeQuery(sql)
        return sql;
    }

    async delete(condition: Condition[]){
        const sql = this.queryBuilder.getSqlDelete(condition);
        console.log(sql);
        // let [rows, fields] = await this.#executeQuery(sql)
    }

    async activeUnactiveRow(action:boolean, condition: Condition[]){
        let sql = "";        
        sql = this.queryBuilder.getSqlActiveUnactiveRow(action, condition)
        console.log(sql)
        // let [rows, fields] = await this.#executeQuery(sql)
    }

    async #executeQuery(sql: string){
        let [rows , fileds] = await db.query(sql)
        return [rows, fileds]
    }
}