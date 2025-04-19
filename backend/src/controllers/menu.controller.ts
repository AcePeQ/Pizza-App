import { Request, Response } from "express";
import Pizza from "../models/pizza.model";

export const pizzaMenu = async (req: Request, res: Response) => {
  try {
    const pizzaMenu = await Pizza.find();
    res.status(200).json(pizzaMenu);
  } catch (error) {
    console.log(`Error in pizza menu controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const pizzaMenuIngredients = async (req: Request, res: Response) => {
  try {
    const pizzaMenu = await Pizza.find();

    if (!pizzaMenu) {
      res.status(400).json({ message: "Pizzas not found" });
      return;
    }

    const pizzaMenuIngredientsArray = pizzaMenu.flatMap(
      (pizza) => pizza.ingredients
    );

    const ingredientsSet = new Set(pizzaMenuIngredientsArray);
    const ingredientsArr = Array.from(ingredientsSet);

    const ingredients = ingredientsArr.map((ingredient) => {
      return { label: ingredient, value: ingredient };
    });

    res.status(200).json(ingredients);
  } catch (error) {
    console.log(`Error in pizza menu ingredients controller: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
