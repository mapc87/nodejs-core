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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ClsDb_instances, _ClsDb_executeQuery;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClsDb = void 0;
const query_builder_class_1 = require("./query-builder.class");
const db_configuration_1 = __importDefault(require("@configuration/db.configuration"));
class ClsDb {
    constructor(tableName) {
        _ClsDb_instances.add(this);
        this.table = "";
        this.table = tableName;
        this.queryBuilder = new query_builder_class_1.ClsQueryBuilder(tableName);
    }
    select(fields, condition) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = this.queryBuilder.getSqlSelect(fields, condition);
            // let [rows, fields] = await this.#executeQuery(sql)
            console.log(sql);
            return sql;
        });
    }
    insert(object) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = this.queryBuilder.getSqlInsert(object);
            // let [rows, fields] = await this.#executeQuery(sql)
            console.log(sql);
            return sql;
        });
    }
    multipleInsert(objects) {
        return __awaiter(this, void 0, void 0, function* () {
            if (objects.length > 1) {
                objects.forEach((o) => __awaiter(this, void 0, void 0, function* () {
                    let sql = this.queryBuilder.getSqlInsert(o);
                    //let [rows, fields] = await this.#executeQuery(sql)
                }));
            }
            return;
        });
    }
    update(object, conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = this.queryBuilder.getSqlUpdate(object, conditions);
            // let [rows, fields] = await this.#executeQuery(sql)
            return sql;
        });
    }
    delete(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = this.queryBuilder.getSqlDelete(condition);
            console.log(sql);
            // let [rows, fields] = await this.#executeQuery(sql)
        });
    }
    activeUnactiveRow(action, condition) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "";
            sql = this.queryBuilder.getSqlActiveUnactiveRow(action, condition);
            console.log(sql);
            // let [rows, fields] = await this.#executeQuery(sql)
        });
    }
}
exports.ClsDb = ClsDb;
_ClsDb_instances = new WeakSet(), _ClsDb_executeQuery = function _ClsDb_executeQuery(sql) {
    return __awaiter(this, void 0, void 0, function* () {
        let [rows, fileds] = yield db_configuration_1.default.query(sql);
        return [rows, fileds];
    });
};
