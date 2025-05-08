import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import Order from "../models/order.model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    const { pizzas } = authReq.body;
    const userId = authReq.user._id;

    const newOrder = new Order({
      userId,
      pizzas,
    });

    if (!authReq.user) {
      res.status(401).json({ message: "Order couldn't be placed" });
      return;
    }

    await newOrder.save();
    res.status(200).json({ message: "The order has been placed successfully" });
  } catch (error) {
    console.log(`Error in pizza menu ingredients controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const orderHistory = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    console.log(authReq);

    const orders = await Order.find({ userId: authReq.user._id }).sort({
      createdAt: -1,
    });

    if (!orders) {
      res.status(401).json({ message: "There is no order history" });
      return;
    }

    res.status(200).json(orders);
  } catch (error) {
    console.log(`Error in pizza menu ingredients controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
