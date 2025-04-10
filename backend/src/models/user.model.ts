import mongoose, { ObjectId, Schema } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  displayName: string;
  profilePicture?: string;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    displayName: { type: String, required: true },
    profilePicture: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
