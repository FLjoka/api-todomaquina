"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("../controllers/services.controller");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    (0, services_controller_1.getServices)(req, res);
});
router.get("/:id", (req, res) => {
    (0, services_controller_1.getServiceById)(req, res);
});
router.post("/", (req, res) => {
    (0, services_controller_1.postServices)(req, res);
});
router.put("/", (req, res) => {
    (0, services_controller_1.putServices)(req, res);
});
exports.default = router;
