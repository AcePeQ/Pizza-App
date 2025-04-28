import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import authRoutes from "./routes/auth.route";
import menuRoutes from "./routes/menu.route";
import accountRoutes from "./routes/account.route";
import orderRoutes from "./routes/order.route";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});
