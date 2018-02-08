import {Subject} from "rxjs/Subject";

import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
    public onIngredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient(
            "Apple",
            5
        ),
        new Ingredient(
            "Orange",
            10
        )
    ];

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.onIngredientsChanged.next(this.getIngredients());
    }

    public addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.onIngredientsChanged.next(this.getIngredients());
    }
}
