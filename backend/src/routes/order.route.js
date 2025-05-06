"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.post("/order", auth_middleware_1.verifyToken, order_controller_1.createOrder);
router.get("/order-history", auth_middleware_1.verifyToken, order_controller_1.orderHistory);
exports.default = router;
