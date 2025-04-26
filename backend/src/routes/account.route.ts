import express from "express";
import { shippingAddress } from "../controllers/account.controller";

const router = express.Router();

router.get("/shippingAddress", shippingAddress);

export default router;
