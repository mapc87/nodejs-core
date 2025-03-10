"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const config_1 = require("../config");
server_1.default.listen(config_1.PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${config_1.PORT}`);
});
