"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDbMessage = exports.buildStatusMessage = void 0;
const es_messages_1 = require("@common/messages/es/es.messages");
const buildStatusMessage = (message, status = true) => {
    const STATUS = status ? 'ok' : 'fail';
    return { status: STATUS, message: message };
};
exports.buildStatusMessage = buildStatusMessage;
const buildDbMessage = (table) => ({
    okCreate: `${table} ${es_messages_1.db_messages.ok_create}`,
    okUpdate: `${table} ${es_messages_1.db_messages.ok_update}`,
    okDelete: `${table} ${es_messages_1.db_messages.ok_delete}`,
    notFound: `${table} ${es_messages_1.db_messages.not_found}`,
    failSelec: `${es_messages_1.db_messages.fail_select} ${table}`,
    failCreate: `${es_messages_1.db_messages.fail_create} ${table}`,
    failUpdate: `${es_messages_1.db_messages.fail_update} ${table}`,
    failDelete: `${es_messages_1.db_messages.fail_delete} ${table}`
});
exports.buildDbMessage = buildDbMessage;
