import { Request, RequestHandler, Response } from "express";

import bcrypt from "bcrypt";

import User from "../models/user.model";
import { generateToken } from "../middlewares/auth.middleware";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All field are required" });
    }

    const user = await User.findOne({ email });

    if (user) {
      res
        .status(400)
        .json({ message: "Account with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
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
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = bcrypt.compare(
      password,
      user?.password as string
    );

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user?._id, res);

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

export const logout = async (_: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(`Error in logout controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
