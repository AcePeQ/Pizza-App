import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import authRoutes from "./routes/auth.route";
import menuRoutes from "./routes/menu.route";
import accountRoutes from "./routes/account.route";
import orderRoutes from "./routes/order.route";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

// https://pizza-app-front-end.onrender.com
// http://localhost:5173

const app = express();
dotenv.config();

const PORT = process.env.PORT;

const currentDir = process.cwd();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://pizza-app-front-end.onrender.com",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/order", orderRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(currentDir, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(currentDir, "../../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});
