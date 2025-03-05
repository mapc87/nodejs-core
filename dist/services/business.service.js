"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBusiness = exports.activateInactiveBusiness = exports.updateBusiness = exports.createBusiness = exports.selectBusiness = void 0;
const db_service_class_1 = require("src/db/db.service.class");
const dbService = new db_service_class_1.ClsDbService("BUSSINES");
const selectBusiness = () => {
    let conditions = [{
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
        }];
    return dbService.select(undefined, conditions);
};
exports.selectBusiness = selectBusiness;
const createBusiness = () => {
    const Business = {
        idBussines: 1,
        name: "Miguel",
        nit: "43098258",
    };
};
exports.createBusiness = createBusiness;
const updateBusiness = () => {
    const Business = {
        idBussines: 2,
        name: "Miguel Angel",
        nit: "43098258"
    };
    let conditions = [{
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
        }];
};
exports.updateBusiness = updateBusiness;
const activateInactiveBusiness = () => {
};
exports.activateInactiveBusiness = activateInactiveBusiness;
const deleteBusiness = () => {
};
exports.deleteBusiness = deleteBusiness;
