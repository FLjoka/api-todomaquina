"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_routes_1 = __importDefault(require("./routes/clientes.routes"));
const maquinas_routes_1 = __importDefault(require("./routes/maquinas.routes"));
const services_routes_1 = __importDefault(require("./routes/services.routes"));
const config_1 = require("../config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/ping", (_req, res) => {
    console.log("someone pinged here!!");
    res.send("pong");
});
app.use("/api/clientes", clientes_routes_1.default);
app.use("/api/maquinas", maquinas_routes_1.default);
app.use("/api/services", services_routes_1.default);
app.listen(config_1.PORT, () => {
    console.log(`Server on port ${config_1.PORT}`);
});
