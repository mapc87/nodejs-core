"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClsQueryBuilder_instances, _ClsQueryBuilder_getStrWhere, _ClsQueryBuilder_getkeyValues, _ClsQueryBuilder_setkeyNames, _ClsQueryBuilder_convertValueToSpecificType;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClsQueryBuilder = void 0;
class ClsQueryBuilder {
    constructor(tableName) {
        _ClsQueryBuilder_instances.add(this);
        this.open = " ( ";
        this.close = " ) ";
        this.comma = ", ";
        this.asterisk = "*";
        this.emptySpace = "";
        //changes key value to db field name convention adding underscode istead uppercase letter
        _ClsQueryBuilder_setkeyNames.set(this, (object, keysList) => {
            let keys = [];
            if (object) {
                keys = Object.keys(object);
            }
            else if (keysList) {
                keys = keysList;
            }
            if (keys.length > 0) {
                keys.forEach((k, index) => {
                    let dbField = "";
                    for (let i = 0; i < k.length; i++) {
                        if (k[i].toLocaleUpperCase() == k[i]) {
                            k = (k.replace(k[i], `_${k[i].toLocaleLowerCase()}`));
                            dbField = k;
                        }
                        if (dbField)
                            keys[index] = dbField;
                    }
                });
            }
            return keys;
        });
        _ClsQueryBuilder_convertValueToSpecificType.set(this, (value) => {
            let returnValue = "";
            switch (typeof value) {
                case "string":
                    returnValue += `"${value}"`;
                    break;
                case "boolean":
                    returnValue += `${value ? 1 : 0}`;
                    break;
                case "number":
                    returnValue += `${value}`;
                    break;
                case "object":
                    returnValue += `STR_TO_DATE ('${value}', '%d-%m-%Y')`;
                    break;
                default:
                    break;
            }
            return returnValue;
        });
        this.tableName = tableName;
    }
    getSqlSelect(fields, condition) {
        let keyValues = [];
        let keyNames = "";
        if (fields) {
            keyValues = __classPrivateFieldGet(this, _ClsQueryBuilder_setkeyNames, "f").call(this, "", fields);
            keyValues.forEach((k, index) => {
                keyNames += `${k}`;
                keyNames += index < keyValues.length ? this.comma : this.emptySpace;
            });
        }
        else {
            keyNames = this.asterisk;
        }
        let sql = `SELECT ${keyNames} FROM ${this.tableName}`;
        if (condition) {
            let whereStatment = __classPrivateFieldGet(this, _ClsQueryBuilder_instances, "m", _ClsQueryBuilder_getStrWhere).call(this, condition);
            sql += ` WHERE ${whereStatment}`;
        }
        return sql;
    }
    getSqlInsert(object) {
        let keyValues = __classPrivateFieldGet(this, _ClsQueryBuilder_instances, "m", _ClsQueryBuilder_getkeyValues).call(this, object);
        let sql = "";
        let fields = "";
        let values = "";
        if (keyValues.length > 0) {
            fields += this.open;
            values += this.open;
            keyValues.forEach((k, index) => __awaiter(this, void 0, void 0, function* () {
                fields += `${k.name}`;
                values += `${__classPrivateFieldGet(this, _ClsQueryBuilder_convertValueToSpecificType, "f").call(this, k.value)}`;
                if (index + 1 < keyValues.length) {
                    fields += this.comma;
                    values += this.comma;
                }
                else {
                    fields += this.close;
                    values += this.close;
                }
            }));
            sql = `INSERT INTO ${this.tableName} ${fields} VALUES ${values}`;
        }
        return sql;
    }
    getSqlUpdate(object, conditions) {
        let keyValues = __classPrivateFieldGet(this, _ClsQueryBuilder_instances, "m", _ClsQueryBuilder_getkeyValues).call(this, object);
        let values = "";
        let whereStatment = "";
        if (keyValues.length > 0) {
            keyValues.forEach((k, index) => {
                values += `${k.name} =  `;
                values += __classPrivateFieldGet(this, _ClsQueryBuilder_convertValueToSpecificType, "f").call(this, k.value);
                if (index + 1 < keyValues.length) {
                    values += `${this.comma} `;
                }
            });
        }
        whereStatment = __classPrivateFieldGet(this, _ClsQueryBuilder_instances, "m", _ClsQueryBuilder_getStrWhere).call(this, conditions);
        let sql = `UPDATE ${this.tableName} SET ${values} WHERE ${whereStatment}`;
        return sql;
    }
    getSqlDelete(conditions) {
        const whereStatment = __classPrivateFieldGet(this, _ClsQueryBuilder_instances, "m", _ClsQueryBuilder_getStrWhere).call(this, conditions);
        if (conditions.length > 0) {
            return `DELETE ${this.tableName}  WHERE ${whereStatment}`;
        }
        return this.emptySpace;
    }
    getSqlActiveUnactiveRow(action, conditions) {
        const activeRow = action ? 1 : 0;
        const whereStatment = __classPrivateFieldGet(this, _ClsQueryBuilder_instances, "m", _ClsQueryBuilder_getStrWhere).call(this, conditions);
        if (conditions.length > 0) {
            return `UPDATE ${this.tableName} SET ACTIVE = ${activeRow}  WHERE ${whereStatment}`;
        }
        return this.emptySpace;
    }
}
exports.ClsQueryBuilder = ClsQueryBuilder;
_ClsQueryBuilder_setkeyNames = new WeakMap(), _ClsQueryBuilder_convertValueToSpecificType = new WeakMap(), _ClsQueryBuilder_instances = new WeakSet(), _ClsQueryBuilder_getStrWhere = function _ClsQueryBuilder_getStrWhere(conditions) {
    let whereStatment = "";
    let conditionsList = [];
    conditions.forEach(c => {
        conditionsList.push(c.conditionField);
    });
    let keyValues = __classPrivateFieldGet(this, _ClsQueryBuilder_setkeyNames, "f").call(this, undefined, conditionsList);
    if (conditions.length > 0) {
        conditions.forEach((c, index) => {
            whereStatment += ` ${keyValues[index]} ${c.condition} ${__classPrivateFieldGet(this, _ClsQueryBuilder_convertValueToSpecificType, "f").call(this, c.condtionValue)} ${c.connector}`;
        });
    }
    return whereStatment;
}, _ClsQueryBuilder_getkeyValues = function _ClsQueryBuilder_getkeyValues(object) {
    let keys = __classPrivateFieldGet(this, _ClsQueryBuilder_setkeyNames, "f").call(this, object);
    let values = Object.values(object);
    let keyValues = [];
    keys.forEach((k, index) => {
        keyValues.push({
            name: k,
            value: values[index]
        });
    });
    return keyValues;
};
