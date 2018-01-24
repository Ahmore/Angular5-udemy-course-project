import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
    public onIngredientsChanged = new EventEmitter<Ingredient[]>();
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
        this.onIngredientsChanged.emit(this.getIngredients());
    }
}
