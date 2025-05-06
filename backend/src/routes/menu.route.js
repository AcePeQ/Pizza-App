"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("../controllers/menu.controller");
const router = express_1.default.Router();
router.get("/pizzaMenu", menu_controller_1.pizzaMenu);
router.get("/ingredients", menu_controller_1.pizzaMenuIngredients);
exports.default = router;
