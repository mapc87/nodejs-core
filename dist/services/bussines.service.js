"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompany = exports.activateInactiveCompany = exports.updateCompany = exports.createCompany = exports.selectCompany = void 0;
const selectCompany = () => {
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
};
exports.selectCompany = selectCompany;
const createCompany = () => {
    const company = {
        idCompany: 10,
        name: "company 1",
        address: "zona 1",
        active: true,
        dateCreation: new Date().toLocaleDateString("en-GB", { timeZone: "UTC" })
    };
};
exports.createCompany = createCompany;
const updateCompany = () => {
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
};
exports.updateCompany = updateCompany;
const activateInactiveCompany = () => {
};
exports.activateInactiveCompany = activateInactiveCompany;
const deleteCompany = () => {
};
exports.deleteCompany = deleteCompany;
