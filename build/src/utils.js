"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseNombre = (nombreFromRequest, dato) => {
    if (!isString(nombreFromRequest)) {
        console.log(nombreFromRequest);
        throw new Error(`El campo ${dato} debe ser de tipo string o su valor no fue enviado`);
    }
    else {
        return nombreFromRequest;
    }
};
const parseNoRequerido = (dataFromRequest, dato) => {
    if (dataFromRequest) {
        if (!isString(dataFromRequest)) {
            throw new Error(`El ${dato} debe ser de tipo string`);
        }
        else {
            return dataFromRequest;
        }
    }
    return undefined;
};
const parseProvincia = (provinciaFromRequest) => {
    if (!esProvincia(provinciaFromRequest) || !isString(provinciaFromRequest)) {
        throw new Error("Error en el campo provincia");
    }
    return provinciaFromRequest;
};
const esProvincia = (param) => {
    return Object.values(types_1.Provincia).includes(param);
};
const isString = (string) => {
    return typeof string === "string";
};
const confirmarCliente = (objeto) => {
    const newCliente = {
        nombre: parseNombre(objeto.nombre, "nombre"),
        apellido: parseNombre(objeto.apellido, "apellido"),
        dni: parseNombre(objeto.dni, "dni"),
        direccion: parseNombre(objeto.direccion, "direccion"),
        telefonoUno: parseNombre(objeto.telefonoUno, "telefono"),
        telefonoDos: parseNoRequerido(objeto.telefonoDos, "telefono"),
        ciudad: parseNombre(objeto.ciudad, "ciudad"),
        provincia: parseProvincia(objeto.provincia),
    };
    return newCliente;
};
exports.default = confirmarCliente;
