import express from "express";
import { pizzaMenu } from "../controllers/menu.controller";

const router = express.Router();

router.get("/pizzaMenu", pizzaMenu);

export default router;
