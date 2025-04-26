import express from "express";
import {
  shippingAddress,
  updateShippingAddress,
} from "../controllers/account.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/shippingAddress", verifyToken, shippingAddress);
router.post("/updateShippingAddress", updateShippingAddress);

export default router;
