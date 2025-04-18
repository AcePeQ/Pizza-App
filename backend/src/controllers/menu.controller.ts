import { Request, Response } from "express";
import Pizza from "../models/pizza.model";

export const pizzaMenu = async (req: Request, res: Response) => {
  try {
    const pizzaMenu = await Pizza.find();
    res.status(200).json(pizzaMenu);
  } catch (error) {
    console.log(`Error in pizza menu controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
