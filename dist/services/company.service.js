"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompany = exports.createCompany = exports.ClsCreateService = void 0;
const db_repository_class_1 = require("@common/db/db.repository.class");
class ClsCreateService {
    constructor(tableName) {
        this.tableName = "";
        this.tableName = tableName;
        this.crud = new db_repository_class_1.ClsDb(tableName);
    }
    select(fields, conditions) {
        return this.crud.Select(fields, conditions);
    }
    insert(object) {
        return this.crud.create(object);
    }
    update(object, conditions) {
        return this.crud.update(object, conditions);
    }
    delete(conditions) {
        return this.crud.delete(conditions);
    }
    enabledDisabledRow(action, conditions) {
        return this.crud.activeUnactiveRow(action, conditions);
    }
}
exports.ClsCreateService = ClsCreateService;
const createCompany = () => {
    const company = {
        idCompany: 10,
        name: "company 1",
        address: "zona 1",
        active: true,
        dateCreation: new Date().toLocaleDateString("en-GB", { timeZone: "UTC" })
    };
    const crud = new db_repository_class_1.ClsDb("COMPANY");
    const create = crud.create(company);
    (0, exports.updateCompany)();
    console.log(create);
};
exports.createCompany = createCompany;
const updateCompany = () => {
    const crud = new db_repository_class_1.ClsDb("COMPANY");
    const company = {
        idCompany: 5,
        name: "company 5",
        address: "zona 5",
        active: false,
        dateCreation: new Date().toLocaleDateString("en-GB", { timeZone: "UTC" })
    };
    let conditions = [{
            conditionField: "idCompany",
            condition: "=",
            condtionValue: 1,
            connector: "AND"
        },
        {
            conditionField: "name",
            condition: "LIKE",
            condtionValue: "restaurant",
            connector: ""
        }];
    const create = crud.update(company, conditions);
    crud.activeUnactiveRow(true, conditions);
    crud.activeUnactiveRow(false, conditions);
    crud.delete(conditions);
    console.log(crud.Select(undefined, conditions));
    console.log(crud.Select(undefined, undefined));
    console.log(crud.Select(['idCompay', 'name'], conditions));
    console.log(create);
};
exports.updateCompany = updateCompany;
