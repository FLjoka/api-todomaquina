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
exports.putServices = exports.postServices = exports.getServiceById = exports.getServices = void 0;
const db_1 = require("../db");
const getServices = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.pool.query("SELECT * FROM services");
    res.json(result);
});
exports.getServices = getServices;
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const [result] = yield db_1.pool.query("SELECT * FROM services WHERE id = ?", [
            id,
        ]);
        if (Array.isArray(result) && result.length <= 0) {
            res.status(404).json({
                error: "El services no existe",
            });
        }
        else {
            res.json(result);
        }
    }
    catch (error) {
        res.json(error.message);
    }
});
exports.getServiceById = getServiceById;
const postServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { maquinaId, clienteId, fechaIngreso, fechaConfirmacion, fechaRetiro, estanteria, notas, } = req.body;
        const [result] = yield db_1.pool.query("INSERT INTO services (maquinaId, clienteId, fechaIngreso, fechaConfirmacion, fechaRetiro, estanteria, notas) VALUES (?,?,?,?,?,?,?)", [
            maquinaId,
            clienteId,
            fechaIngreso,
            fechaConfirmacion,
            fechaRetiro,
            estanteria,
            notas,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                error: "Error al ingresar la maquina",
            });
        const resp = yield db_1.pool.query("SELECT * FROM services WHERE id = ?", [
            result.insertId,
        ]);
        res.json(resp[0]);
    }
    catch (error) { }
});
exports.postServices = postServices;
const putServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { maquinaId, clienteId, fechaIngreso, fechaConfirmacion, fechaRetiro, estanteria, notas, } = req.body;
        const [result] = yield db_1.pool.query("UPDATE maquinas SET maquinaId=?, clienteId=?, fechaIngreso=?, fechaConfirmacion=?, fechaRetiro=?, estanteria=?, notas=? WHERE id=?", [
            maquinaId,
            clienteId,
            fechaIngreso,
            fechaConfirmacion,
            fechaRetiro,
            estanteria,
            notas,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                error: "Service no encontrado",
            });
        const [rows] = yield db_1.pool.query("SELECT * FROM maquinas WHERE id = ?", [
            id,
        ]);
        res.json(rows);
    }
    catch (error) {
        res.json(error.message);
    }
});
exports.putServices = putServices;
