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
exports.pizzaMenuIngredients = exports.pizzaMenu = void 0;
const pizza_model_1 = __importDefault(require("../models/pizza.model"));
const pizzaMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sortBy, ingredients } = req.query;
        const filter = {};
        if (ingredients !== "null" && typeof ingredients === "string") {
            const ingredientsArr = ingredients.split(",");
            filter.ingredients = { $all: ingredientsArr };
        }
        const sort = {};
        switch (sortBy) {
            case "price_ascending":
                sort.price = 1;
                break;
            case "price_descending":
                sort.price = -1;
                break;
            case "name_az":
                sort.name = 1;
                break;
            case "name_za":
                sort.name = -1;
                break;
        }
        let pizzaMenu;
        if (ingredients !== "null") {
            pizzaMenu = yield pizza_model_1.default.find(ingredients ? filter : "").sort(sort);
            res.status(200).json(pizzaMenu);
            return;
        }
        pizzaMenu = yield pizza_model_1.default.find().sort(sort);
        res.status(200).json(pizzaMenu);
    }
    catch (error) {
        console.log(`Error in pizza menu controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.pizzaMenu = pizzaMenu;
const pizzaMenuIngredients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pizzaMenu = yield pizza_model_1.default.find();
        if (!pizzaMenu) {
            res.status(400).json({ message: "Pizzas not found" });
            return;
        }
        const pizzaMenuIngredientsArray = pizzaMenu.flatMap((pizza) => pizza.ingredients);
        const ingredientsSet = new Set(pizzaMenuIngredientsArray);
        const ingredientsArr = Array.from(ingredientsSet);
        const ingredients = ingredientsArr.map((ingredient) => {
            return { label: ingredient, value: ingredient };
        });
        res.status(200).json(ingredients);
    }
    catch (error) {
        console.log(`Error in pizza menu ingredients controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.pizzaMenuIngredients = pizzaMenuIngredients;
