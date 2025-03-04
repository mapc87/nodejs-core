import { Condition } from './db.inteface';
import { ClsQueryBuilder } from './query-builder.class';
import db from '@configuration/db'

export class ClsDb{

    table = "";
    private queryBuilder; 
    
    constructor(tableName: string) {
        this.table = tableName; 
        this.queryBuilder = new ClsQueryBuilder(tableName);
    }

    async Select(fields?: string[], condition?: Condition[]){
        const sql = this.queryBuilder.getSqlSelect(fields, condition);
        // let [rows, fields] = await this.#executeQuery(sql)
        console.log(sql)
        return sql;
    }

    async create(object: Object){
        const sql = this.queryBuilder.getSqlCreate(object);
        // let [rows, fields] = await this.#executeQuery(sql)
        console.log(sql)
        return sql;
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