"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_controller_1 = require("../controllers/clientes.controller");
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get("/", (res, _req) => {
    (0, clientes_controller_1.getClientesdb)(res, _req);
});
router.get("/:id", (res, req) => {
    (0, clientes_controller_1.getClienteByIdDb)(res, req);
});
router.post("/", (req, res) => {
    const newCliente = (0, utils_1.default)(req.body);
    req.body = newCliente;
    (0, clientes_controller_1.postClienteDb)(req, res);
});
exports.default = router;
router.put("/:id", (req, res) => {
    const newCliente = (0, utils_1.default)(req.body);
    req.body = newCliente;
    (0, clientes_controller_1.putClienteDB)(req, res);
});
