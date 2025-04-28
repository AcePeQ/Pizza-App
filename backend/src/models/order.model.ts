import mongoose, { Document, Schema } from "mongoose";

export interface IOrderPizza {
  name: string;
  quantity: number;
  image: string;
  price: string;
  ingredients: string[];
}

export interface IOrder extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  pizzas: IOrderPizza[];
}

const orderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  pizzas: {
    type: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        ingredients: { type: [String], required: true },
      },
    ],
    required: true,
  },
});

const Order = mongoose.model<IOrder>("order", orderSchema);

export default Order;
