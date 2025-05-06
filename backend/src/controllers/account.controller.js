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
exports.updateShippingAddress = exports.shippingAddress = void 0;
const shippingAddress_model_1 = __importDefault(require("../models/shippingAddress.model"));
const shippingAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authReq = req;
        if (!authReq.user) {
            res.status(401).json({ message: "Unauthorized - No User Found" });
            return;
        }
        const userShippingAddress = authReq.userShippingAddress;
        if (!userShippingAddress) {
            res.status(401).json({ message: "Unauthorized - No User Found" });
            return;
        }
        res.status(200).json(userShippingAddress);
    }
    catch (error) {
        console.log(`Error in shipping address controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.shippingAddress = shippingAddress;
const updateShippingAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, city, country, firstName, lastName, phoneNumber, userId, zipCode, } = req.body;
        if (!address ||
            !city ||
            !firstName ||
            !lastName ||
            !country ||
            !phoneNumber ||
            !userId ||
            !zipCode) {
            res
                .status(400)
                .json({ message: "Make sure you send all necessary data" });
            return;
        }
        const userShippingAddress = yield shippingAddress_model_1.default.findOneAndUpdate({ userId }, { address, city, country, lastName, firstName, phoneNumber, zipCode }, { new: true });
        if (!userShippingAddress) {
            res.status(401).json({ message: "Unauthorized - No User Found" });
            return;
        }
        res
            .status(201)
            .json({ message: "Shipping Addres has been successfully saved" });
    }
    catch (error) {
        console.log(`Error in shipping address controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.updateShippingAddress = updateShippingAddress;
