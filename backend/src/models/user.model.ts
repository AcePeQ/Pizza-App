import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
    profilePicture: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
