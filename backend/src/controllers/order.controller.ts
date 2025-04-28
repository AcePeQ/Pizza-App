import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(`Error in pizza menu ingredients controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
