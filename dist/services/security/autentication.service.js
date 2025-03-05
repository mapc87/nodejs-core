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
exports.singOutUser = exports.singInUser = void 0;
const user_repository_1 = require("@repository/user.repository");
const auth_messages_1 = require("@common/messages/es/auth.messages");
const hash_generator_plugin_1 = require("@plugins/hash-generator.plugin");
const build_message_plugin_1 = require("@plugins/build-message.plugin");
const singInUser = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let returnMessage = {};
        let logMessage = "";
        if (!credentials) {
            returnMessage = (0, build_message_plugin_1.buildStatusMessage)(auth_messages_1.authMessages.badCreedentials, false);
            reject(returnMessage);
        }
        const userInfo = yield (0, user_repository_1.dbGetUser)(credentials.username);
        if (!userInfo) {
            returnMessage = (0, build_message_plugin_1.buildStatusMessage)(auth_messages_1.authMessages.badCreedentials, false);
            reject(returnMessage);
        }
        const isValidPassword = (0, hash_generator_plugin_1.verifyPassword)(userInfo.password, credentials.password);
        if (!isValidPassword)
            return (0, build_message_plugin_1.buildStatusMessage)(auth_messages_1.authMessages.badCreedentials, false);
        if (!userInfo.active)
            return (0, build_message_plugin_1.buildStatusMessage)(auth_messages_1.authMessages.userNotActive, false);
        // const authtenticatedUser = await ObtenerUsuarioAutenticado(credenciales.idUsuario)
        resolve(userInfo);
    }));
});
exports.singInUser = singInUser;
const singOutUser = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
    }));
});
exports.singOutUser = singOutUser;
