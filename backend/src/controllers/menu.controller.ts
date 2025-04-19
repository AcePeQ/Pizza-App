import { Request, Response } from "express";
import Pizza from "../models/pizza.model";

export const pizzaMenu = async (req: Request, res: Response) => {
  try {
    const { sortBy, ingredients } = req.query;

    const filter: any = {};

    if (ingredients !== "null" && typeof ingredients === "string") {
      const ingredientsArr = ingredients.split(",");
      filter.ingredients = { $all: ingredientsArr };
    }

    const sort: any = {};

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
      pizzaMenu = await Pizza.find(ingredients ? filter : "").sort(sort);
      res.status(200).json(pizzaMenu);
      return;
    }

    pizzaMenu = await Pizza.find().sort(sort);
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
