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
Object.defineProperty(exports, "__esModule", { value: true });
exports.failMessage = exports.OkMessage = void 0;
const es_messages_1 = require("@common/messages/es.messages");
const OkMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return { status: es_messages_1.ok, message: message };
});
exports.OkMessage = OkMessage;
const failMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return { status: es_messages_1.fail, message: message };
});
exports.failMessage = failMessage;
