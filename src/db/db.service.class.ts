import { ClsDb } from "src/db/db.repository.class";
import { Condition } from "src/db/interfaces/db.inteface";

export class ClsDbService{
    tableName = "";
    private db;

    constructor(tableName:string) {
        this.tableName = tableName;
        this.db = new ClsDb(tableName);
    }

    select(fields?:string[], conditions?:Condition[]){
        return this.db.select(fields, conditions)
    }

    insert(object: Object){
        return this.db.insert(object);
    }

    update(object: Object, conditions:Condition[]){
        return this.db.update(object,conditions);
    }

    delete(conditions:Condition[]){
        return this.db.delete(conditions);
    }

    enabledDisabledRow(action:boolean, conditions:Condition[]){
        return this.db.activeUnactiveRow(action, conditions)
    }
}