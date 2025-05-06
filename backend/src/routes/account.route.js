"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const account_controller_1 = require("../controllers/account.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.get("/shippingAddress", auth_middleware_1.verifyToken, account_controller_1.shippingAddress);
router.post("/updateShippingAddress", account_controller_1.updateShippingAddress);
exports.default = router;
