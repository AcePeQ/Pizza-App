"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_config_1 = require("./config/db.config");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const menu_route_1 = __importDefault(require("./routes/menu.route"));
const account_route_1 = __importDefault(require("./routes/account.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// https://pizza-app-front-end.onrender.com
// http://localhost:5173
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT;
const currentDir = process.cwd();
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "10mb" }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: "https://pizza-app-front-end.onrender.com",
    credentials: true,
}));
app.use("/api/auth", auth_route_1.default);
app.use("/api/menu", menu_route_1.default);
app.use("/api/account", account_route_1.default);
app.use("/api/order", order_route_1.default);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(currentDir, "../../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(currentDir, "../../frontend", "dist", "index.html"));
    });
}
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    (0, db_config_1.connectDB)();
});
