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
exports.deleteTest = exports.putTest = exports.postTest = exports.getTest = void 0;
const test_service_1 = require("@services/test.service");
const getTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = (0, test_service_1.addTest)();
        res.json(result);
    }
    catch (error) {
    }
    return;
});
exports.getTest = getTest;
const postTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = (0, test_service_1.addTest)();
        res.json(result);
    }
    catch (error) {
    }
});
exports.postTest = postTest;
const putTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = (0, test_service_1.updateTest)();
        res.json(result);
    }
    catch (error) {
    }
});
exports.putTest = putTest;
const deleteTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = (0, test_service_1.removeTest)();
        res.json(result);
    }
    catch (error) {
    }
});
exports.deleteTest = deleteTest;
