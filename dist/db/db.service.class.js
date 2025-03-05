"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClsDbService = void 0;
const db_repository_class_1 = require("src/db/db.repository.class");
class ClsDbService {
    constructor(tableName) {
        this.tableName = "";
        this.tableName = tableName;
        this.db = new db_repository_class_1.ClsDb(tableName);
    }
    select(fields, conditions) {
        return this.db.select(fields, conditions);
    }
    insert(object) {
        return this.db.insert(object);
    }
    update(object, conditions) {
        return this.db.update(object, conditions);
    }
    delete(conditions) {
        return this.db.delete(conditions);
    }
    enabledDisabledRow(action, conditions) {
        return this.db.activeUnactiveRow(action, conditions);
    }
}
exports.ClsDbService = ClsDbService;
