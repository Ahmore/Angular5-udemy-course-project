import {Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipesService {
    public onRecipesChanged = new Subject<Recipe[]>();

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

    constructor(private shoppingListService: ShoppingListService) {}

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    public getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }

    public addRecipe(recipe: Recipe): number {
        this.recipes.push(recipe);
        this.onRecipesChanged.next(this.getRecipes());

        return this.recipes.length-1;
    }

    public editRecipe(index: number, recipe: Recipe): void  {
        this.recipes[index] = recipe;
        this.onRecipesChanged.next(this.getRecipes());
    }

    public deleteRecipe(index: number): void {
        this.recipes.splice(index, 1);
        this.onRecipesChanged.next(this.getRecipes());
    }
}
