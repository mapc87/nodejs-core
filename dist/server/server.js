"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//routes
const autentication_routes_1 = __importDefault(require("./routes/autentication.routes"));
const company_routes_1 = __importDefault(require("./routes/company.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:4200', 'https://luna-restaurant.netlify.app', 'https://luna-cocina-del-alma.netlify.app'],
    methods: ['GET', 'PUT', 'UPDATE', 'DELETE', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/', autentication_routes_1.default);
app.use('/api/', company_routes_1.default);
//app.use(validateToken)
app.use((0, cors_1.default)(), (req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    });
});
exports.default = app;
