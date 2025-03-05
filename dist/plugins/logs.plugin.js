"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _clsLogger_instances, _clsLogger_addHeader, _clsLogger_addDetails;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clsLogger = void 0;
class clsLogger {
    constructor() {
        _clsLogger_instances.add(this);
        this.header = {
            bussinesId: 0,
            sucursalId: 0,
            userId: 0,
            transactinType: "",
            comments: "",
            transactionDate: new Date(),
            transactionTime: ""
        };
        this.details = {
            log_header_id: 0,
            oldValue: 0,
            newValue: 0
        };
    }
    logTransaction(addDetails) {
        let header = __classPrivateFieldGet(this, _clsLogger_instances, "m", _clsLogger_addHeader).call(this, this.header);
        if (addDetails) {
            let details = __classPrivateFieldGet(this, _clsLogger_instances, "m", _clsLogger_addDetails);
        }
    }
}
exports.clsLogger = clsLogger;
_clsLogger_instances = new WeakSet(), _clsLogger_addHeader = function _clsLogger_addHeader(header) {
}, _clsLogger_addDetails = function _clsLogger_addDetails() {
};
