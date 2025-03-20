import { Response } from "express";

import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const generateToken = async (
  userId: mongoose.Types.ObjectId | undefined,
  res: Response
) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
