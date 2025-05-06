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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const shippingAddress_model_1 = __importDefault(require("../models/shippingAddress.model"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authReq = req;
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).json({ message: "Unauthorized - No Token Provided" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded || !decoded.userId) {
            res.status(401).json({ message: "Unauthorized - Invalid Token" });
            return;
        }
        const user = yield user_model_1.default.findById(decoded.userId).select("-password");
        const userShippingAddress = yield shippingAddress_model_1.default.findOne({
            userId: decoded.userId,
        });
        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }
        authReq.user = user;
        authReq.userShippingAddress = userShippingAddress;
        next();
    }
    catch (error) {
        console.log(`Error in verifyToken middleware: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.verifyToken = verifyToken;
