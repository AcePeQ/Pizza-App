import mongoose, { Schema } from "mongoose";

export interface IShippingAddress extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  zipCode: string;
  address: string;
}

const shippingAddressSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  address: { type: String, required: true },
});

const ShippmentAddress = mongoose.model(
  "shippingAddress",
  shippingAddressSchema
);

export default ShippmentAddress;
