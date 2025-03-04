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
exports.singInUser = void 0;
const user_repository_1 = require("@repository/user.repository");
const auth_messages_1 = require("@common/messages/auth.messages");
const status_messages_1 = require("@common/messages/status.messages");
const hash_generator_plugin_1 = require("@plugins/hash-generator.plugin");
const singInUser = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const userInfo = yield (0, user_repository_1.dbGetUser)(credentials.email);
        if (!userInfo)
            reject("authObjMessages.badCreedentials");
        const isValidPassword = (0, hash_generator_plugin_1.verifyPassword)(userInfo.password, credentials.password);
        if (!isValidPassword)
            reject((0, status_messages_1.failMessage)(auth_messages_1.authMessages.badCreedentials));
        // const authtenticatedUser = await ObtenerUsuarioAutenticado(credenciales.idUsuario)
        // if(!authtenticatedUser.estado)
        //     reject(failMessage(authObjMessages.userNotActive))
        resolve(userInfo);
    }));
});
exports.singInUser = singInUser;
