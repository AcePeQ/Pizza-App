import express from "express";
import {
  login,
  logout,
  signup,
  verifyAuth,
} from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

router.get("/verifyAuth", verifyToken, verifyAuth);

export default router;
