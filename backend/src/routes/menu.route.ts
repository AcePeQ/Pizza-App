import express from "express";
import {
  pizzaMenu,
  pizzaMenuIngredients,
} from "../controllers/menu.controller";

const router = express.Router();

router.get("/pizzaMenu", pizzaMenu);
router.get("/ingredients", pizzaMenuIngredients);

export default router;
