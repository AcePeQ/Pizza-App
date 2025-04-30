import express from "express";
import { createOrder, orderHistory } from "../controllers/order.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/order", verifyToken, createOrder);
router.get("/order-history", verifyToken, orderHistory);

export default router;
