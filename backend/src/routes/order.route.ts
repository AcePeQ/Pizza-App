import express from "express";
import { createOrder } from "../controllers/order.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/order", verifyToken, createOrder);

export default router;
