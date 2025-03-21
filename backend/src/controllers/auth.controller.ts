import { Request, Response } from "express";

import bcrypt from "bcrypt";

import User from "../models/user.model";
import { AuthRequest, generateToken } from "../middlewares/auth.middleware";
import cloudinary from "../config/cloudinary.config";
import ShippmentAddress from "../models/shippingAddress.model";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const user = await User.findOne({ email });

    if (user) {
      res
        .status(400)
        .json({ message: "Account with this email already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const newShippingAddress = new ShippmentAddress({
      ...ShippmentAddress,
      userId: newUser._id,
    });

    await newUser.save();
    await newShippingAddress.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(`Error in signup controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All field are required" });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const isPasswordCorrect = bcrypt.compare(
      password,
      user?.password as string
    );

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user?._id,
      email: user?.email,
      profilePicture: user?.profilePicture,
    });
  } catch (error) {
    console.log(`Error in login controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const { profilePicture } = authReq.body;
    const userId = authReq.user?._id;

    if (!profilePicture) {
      res.status(400).json({ message: "Profile picture is required" });
      return;
    }

    const uploadResult = await cloudinary.uploader.upload(profilePicture);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicture: uploadResult.secure_url },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(`Error in updateProfile controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (_: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(`Error in logout controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const verifyAuth = (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    res.status(200).json(authReq.user);
  } catch (error) {
    console.log(`Error in verifyAuth controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
