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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderHistory = exports.createOrder = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authReq = req;
        if (!authReq.user) {
            res.status(401).json({ message: "Unauthorized - No User Found" });
            return;
        }
        const { pizzas } = authReq.body;
        const userId = authReq.user._id;
        const newOrder = new order_model_1.default({
            userId,
            pizzas,
        });
        if (!authReq.user) {
            res.status(401).json({ message: "Order couldn't be placed" });
            return;
        }
        yield newOrder.save();
        res.status(200).json({ message: "The order has been placed successfully" });
    }
    catch (error) {
        console.log(`Error in pizza menu ingredients controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.createOrder = createOrder;
const orderHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authReq = req;
        if (!authReq.user) {
            res.status(401).json({ message: "Unauthorized - No User Found" });
            return;
        }
        const orders = yield order_model_1.default.find().sort({ createdAt: -1 });
        if (!orders) {
            res.status(401).json({ message: "There is no order history" });
            return;
        }
        res.status(200).json(orders);
    }
    catch (error) {
        console.log(`Error in pizza menu ingredients controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.orderHistory = orderHistory;
