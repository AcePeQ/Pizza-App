import { Request, Response } from "express";

import bcrypt from "bcrypt";

import User from "../models/user.model";
import { AuthRequest } from "../middlewares/auth.middleware";
import cloudinary from "../config/cloudinary.config";
import ShippmentAddress from "../models/shippingAddress.model";
import { generateToken } from "../utils/auth.util";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password || !displayName) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Invalid email format" });
      return;
    }

    const user = await User.findOne({ email });

    if (user) {
      res
        .status(400)
        .json({ message: "Account with this email already exists" });
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      res.status(400).json({ message: "Invalid password format" });
      return;
    }

    if (displayName.length <= 3) {
      res.status(400).json({ message: "Invalid display name format" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      displayName,
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

    const isPasswordCorrect = bcrypt.compare(password, user.password as string);

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      email: user.email,
      profilePicture: user.profilePicture,
      displayName: user.displayName,
    });
  } catch (error) {
    console.log(`Error in login controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

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

export const updateAddress = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    if (!authReq.body) {
      res.status(400).json({ message: "Shipping address field are required" });
      return;
    }

    const { firstName, lastName, email, phoneNumber, city, zipCode, address } =
      authReq.body;

    const userId = authReq.user?._id;

    const updatedAddress = await ShippmentAddress.findByIdAndUpdate(
      userId,
      { firstName, lastName, email, phoneNumber, city, zipCode, address },
      { new: true }
    );

    res.status(200).json(updatedAddress);
  } catch (error) {
    console.log(`Error in updateAddress controller: ${error}`);
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

    if (!authReq.user) {
      res.status(401).json({ message: "Unauthorized - No User Found" });
      return;
    }

    res.status(200).json({
      user: {
        _id: authReq.user._id,
        email: authReq.user.email,
        profilePicture: authReq.user.profilePicture,
        displayName: authReq.user.displayName,
      },
    });
  } catch (error) {
    console.log(`Error in verifyAuth controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
