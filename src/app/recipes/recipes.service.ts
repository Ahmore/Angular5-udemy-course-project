import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipesService {
    public onRecipeSelect = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "New recipe",
            "There is the best recipe",
            "https://paprikaapp.com/media/web/images/help/windows/recipe.png"
        ),

        new Recipe(
            "Another recipe",
            "There is the best recipe",
            "https://paprikaapp.com/media/web/images/help/windows/recipe.png"
        )
    ];

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}
