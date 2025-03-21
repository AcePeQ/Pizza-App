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
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  city: { type: String },
  zipCode: { type: String },
  address: { type: String },
});

const ShippmentAddress = mongoose.model(
  "shippingAddress",
  shippingAddressSchema
);

export default ShippmentAddress;
