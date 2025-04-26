import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";

export const shippingAddress = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    const userShippingAddress = authReq.userShippingAddress;

    if (!userShippingAddress) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    res.status(200).json(userShippingAddress);
  } catch (error) {
    console.log(`Error in shipping address controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateShippingAddress = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    const userShippingAddress = authReq.userShippingAddress;

    if (!userShippingAddress) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    res.status(200).json(userShippingAddress);
  } catch (error) {
    console.log(`Error in shipping address controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
