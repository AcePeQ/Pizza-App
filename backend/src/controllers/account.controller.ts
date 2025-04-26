import { Request, Response } from "express";

export const shippingAddress = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(`Error in shipping address controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
