"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const maquinas_controller_1 = require("../controllers/maquinas.controller");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    (0, maquinas_controller_1.getMaquinasDb)(req, res);
});
router.get("/:id", (req, res) => {
    (0, maquinas_controller_1.getMaquinaByIdDb)(req, res);
});
router.post("/", (req, res) => {
    (0, maquinas_controller_1.postMaquinaDb)(req, res);
});
router.put("/:id", (req, res) => {
    (0, maquinas_controller_1.putMaquinaDb)(req, res);
});
router.get("/getMaquinasByCliente/:id", (req, res) => {
    (0, maquinas_controller_1.getMaquinasByClienteId)(req, res);
});
exports.default = router;
