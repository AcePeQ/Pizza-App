import mongoose, { Schema } from "mongoose";

export interface IPizza extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  image: string;
  price: number;
  ingredients: string[];
}

const pizzaSchema = new Schema<IPizza>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: [String], required: true },
});

const Pizza = mongoose.model<IPizza>("pizza", pizzaSchema);

export default Pizza;
