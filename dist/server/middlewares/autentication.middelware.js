"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jwt_plugin_1 = require("@plugins/jwt.plugin");
const auth_messages_1 = require("@common/messages/es/auth.messages");
const status_messages_1 = require("@common/messages/status.messages");
const validateToken = (req, res, next) => {
    var _a, _b;
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader === 'undefined')
        res.sendStatus(403).json((0, status_messages_1.failMessage)(auth_messages_1.authMessages.userNotAuth));
    const token = (_b = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) !== null && _b !== void 0 ? _b : "";
    if (!(0, jwt_plugin_1.isValidToken)(token))
        res.status(401).json((0, status_messages_1.failMessage)(auth_messages_1.authMessages.failtoken));
    next();
    return;
};
exports.validateToken = validateToken;
