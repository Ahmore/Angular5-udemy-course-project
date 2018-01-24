import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {
    public onRecipeSelect = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "New recipe",
            "There is the best recipe",
            "https://paprikaapp.com/media/web/images/help/windows/recipe.png",
            [
                new Ingredient("Meat", 1),
                new Ingredient("Break", 2)
            ]
        ),

        new Recipe(
            "Another recipe",
            "There is the best recipe",
            "https://paprikaapp.com/media/web/images/help/windows/recipe.png",
            [
                new Ingredient("Tomato", 1),
                new Ingredient("Break", 2),
                new Ingredient("Cheese", 2)
            ]
        )
    ];

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}
