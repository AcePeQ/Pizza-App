import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
  verifyAuth,
} from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

router.post("/update-profile", verifyToken, updateProfile);

router.post("/verifyAuth", verifyToken, verifyAuth);

export default router;
