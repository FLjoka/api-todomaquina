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
exports.putClienteDB = exports.postClienteDb = exports.getClienteByIdDb = exports.getClientesdb = void 0;
const db_1 = require("../db");
const getClientesdb = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield db_1.pool.query("SELECT * FROM clientes");
        res.json(result);
    }
    catch (error) {
        res.status(500).json(error.message).end();
    }
});
exports.getClientesdb = getClientesdb;
const getClienteByIdDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield db_1.pool.query("SELECT * FROM clientes WHERE id = ?", [
            req.params.id,
        ]);
        if (Array.isArray(result) && result.length <= 0) {
            res.status(404).json({
                error: "El cliente no existe",
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
exports.getClienteByIdDb = getClienteByIdDb;
const postClienteDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, dni, direccion, ciudad, provincia, telefonoUno, telefonoDos, } = req.body;
        const result = yield db_1.pool.query("INSERT INTO clientes (nombre, apellido, dni, direccion, ciudad, provincia, telefonoUno, telefonoDos) VALUES (?,?,?,?,?,?,?,?)", [
            nombre,
            apellido,
            dni,
            direccion,
            ciudad,
            provincia,
            telefonoUno,
            telefonoDos,
        ]);
        res.json(result);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.postClienteDb = postClienteDb;
const putClienteDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, apellido, dni, direccion, ciudad, provincia, telefonoUno, telefonoDos, } = req.body;
        const result = yield db_1.pool.query("UPDATE clientes SET nombre = ?, apellido =?, dni=?, direccion=?, ciudad=?, provincia=?, telefonoUno=?, telefonoDos=? WHERE id=?", [
            nombre,
            apellido,
            dni,
            direccion,
            ciudad,
            provincia,
            telefonoUno,
            telefonoDos,
            id,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                error: "Cliente not found",
            });
        const [rows] = yield db_1.pool.query("SELECT * FROM clientes WHERE id = ?", [
            id,
        ]);
        res.json(rows);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.putClienteDB = putClienteDB;
