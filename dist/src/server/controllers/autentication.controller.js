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
exports.postLogInUser = void 0;
const postLogInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield AutenticarUsuario(req.body);
        sign(user, KEY, { expiresIn: "4h" }, (err, token) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                res.status(401).json(yield failMessage(authObjMessages.tokenFailGenerate));
            }
            res.json({ status: ok, token, user });
        }));
    }
    catch (error) {
        res.status(401).json(yield failMessage(authObjMessages.badCreedentials));
    }
});
exports.postLogInUser = postLogInUser;
