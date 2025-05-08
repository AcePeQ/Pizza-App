"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuth = exports.logout = exports.updateProfile = exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const cloudinary_config_1 = __importDefault(require("../config/cloudinary.config"));
const shippingAddress_model_1 = __importDefault(require("../models/shippingAddress.model"));
const auth_util_1 = require("../utils/auth.util");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const user = yield user_model_1.default.findOne({ email });
        if (user) {
            res
                .status(400)
                .json({ message: "Account with this email already exists" });
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            res.status(400).json({ message: "Invalid password format" });
            return;
        }
        if (displayName.length <= 3) {
            res.status(400).json({ message: "Invalid display name format" });
            return;
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = new user_model_1.default({
            email,
            password: hashedPassword,
            displayName,
        });
        const newShippingAddress = new shippingAddress_model_1.default(Object.assign(Object.assign({}, shippingAddress_model_1.default), { userId: newUser._id }));
        yield newUser.save();
        yield newShippingAddress.save();
        res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        console.log(`Error in signup controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "All field are required" });
            return;
        }
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const isPasswordCorrect = bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        (0, auth_util_1.generateToken)(user._id, res);
        res.status(200).json({
            _id: user._id,
            email: user.email,
            profilePicture: user.profilePicture,
            displayName: user.displayName,
        });
    }
    catch (error) {
        console.log(`Error in login controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.login = login;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const authReq = req;
        if (!authReq.user) {
            res.status(401).json({ message: "Unauthorized - No User Found" });
            return;
        }
        const { profilePicture } = authReq.body;
        const userId = (_a = authReq.user) === null || _a === void 0 ? void 0 : _a._id;
        if (!profilePicture) {
            res.status(400).json({ message: "Profile picture is required" });
            return;
        }
        const uploadResult = yield cloudinary_config_1.default.uploader.upload(profilePicture);
        const updatedUser = yield user_model_1.default.findByIdAndUpdate(userId, { profilePicture: uploadResult.secure_url }, { new: true }).select("-password");
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.log(`Error in updateProfile controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.updateProfile = updateProfile;
const logout = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
        console.log(`Error in logout controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.logout = logout;
const verifyAuth = (req, res) => {
    try {
        const authReq = req;
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
    }
    catch (error) {
        console.log(`Error in verifyAuth controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.verifyAuth = verifyAuth;
