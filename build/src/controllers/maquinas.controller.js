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
exports.getMaquinasByClienteId = exports.putMaquinaDb = exports.postMaquinaDb = exports.getMaquinaByIdDb = exports.getMaquinasDb = void 0;
const db_1 = require("../db");
const getMaquinasDb = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield db_1.pool.query("SELECT * FROM maquinas");
        res.json(result);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getMaquinasDb = getMaquinasDb;
const getMaquinaByIdDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const [result] = yield db_1.pool.query("SELECT * FROM maquinas WHERE id=?", [
            id,
        ]);
        if (Array.isArray(result) && result.length <= 0) {
            res.status(404).json({
                error: "La maquina no existe",
            });
        }
        else {
            res.json(result);
        }
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getMaquinaByIdDb = getMaquinaByIdDb;
const postMaquinaDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { modelo, marca, numSerie, bobina, carretel, bolso, base, prensatela, accesorios, reostato, hilos, clienteId, } = req.body;
        const [result] = yield db_1.pool.query("INSERT INTO maquinas (modelo, marca, numSerie, bobina, carretel, bolso, base, prensatela, accesorios, reostato, hilos, clienteId) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [
            modelo,
            marca,
            numSerie,
            bobina,
            carretel,
            bolso,
            base,
            prensatela,
            accesorios,
            reostato,
            hilos,
            clienteId,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                error: "Error al ingresar la maquina",
            });
        const resp = yield db_1.pool.query("SELECT * FROM maquinas WHERE id = ?", [
            result.insertId,
        ]);
        res.json(resp[0]);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.postMaquinaDb = postMaquinaDb;
const putMaquinaDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { modelo, marca, numSerie, bobina, carretel, bolso, base, prensatela, accesorios, reostato, hilos, clienteId, } = req.body;
        const result = yield db_1.pool.query("UPDATE maquinas SET modelo = ?, marca =?, numSerie=?, bobina=?, carretel=?, bolso=?, base=?, prensatela=?, accesorios=?, reostato=?, hilos=?, clienteId=? WHERE id=?", [
            modelo,
            marca,
            numSerie,
            bobina,
            carretel,
            bolso,
            base,
            prensatela,
            accesorios,
            reostato,
            hilos,
            clienteId,
            id,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                error: "Maquina not found",
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
exports.putMaquinaDb = putMaquinaDb;
const getMaquinasByClienteId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield db_1.pool.query("SELECT * FROM maquinas WHERE clienteId = ?", [id]);
        if (result[0].length <= 0)
            return res.status(404).json({
                message: "El cliente no existe o no tiene maquinas asignadas",
            });
        res.json(result[0]);
    }
    catch (error) {
        res.json(error.message);
    }
});
exports.getMaquinasByClienteId = getMaquinasByClienteId;
