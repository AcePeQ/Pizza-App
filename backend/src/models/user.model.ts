import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  profilePicture?: string;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
