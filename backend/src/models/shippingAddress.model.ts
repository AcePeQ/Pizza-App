import mongoose, { Schema } from "mongoose";

export interface IShippingAddress extends Document {
  userId: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  zipCode: string;
  address: string;
  country: string;
}

const shippingAddressSchema = new Schema<IShippingAddress>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  city: { type: String, default: "" },
  zipCode: { type: String, default: "" },
  address: { type: String, default: "" },
  country: { type: String, default: "" },
});

const ShippmentAddress = mongoose.model<IShippingAddress>(
  "shippingAddress",
  shippingAddressSchema
);

export default ShippmentAddress;
