import { NextFunction, Request, Response } from "express";

import mongoose from "mongoose";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/user.model";
import ShippmentAddress, {
  IShippingAddress,
} from "../models/shippingAddress.model";

export interface AuthRequest extends Request {
  user: IUser | null;
  userShippingAddress: IShippingAddress | null;
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authReq = req as AuthRequest;
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({ message: "Unauthorized - No Token Provided" });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as JwtPayload;

    if (!decoded || !decoded.userId) {
      res.status(401).json({ message: "Unauthorized - Invalid Token" });
      return;
    }

    const user = await User.findById(decoded.userId).select("-password");
    const userShippingAddress = await ShippmentAddress.findById(decoded.userId);

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    authReq.user = user;
    authReq.userShippingAddress = userShippingAddress;

    next();
  } catch (error) {
    console.log(`Error in verifyToken middleware: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
