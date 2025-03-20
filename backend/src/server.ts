import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import authRoutes from "./routes/auth.route";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});
