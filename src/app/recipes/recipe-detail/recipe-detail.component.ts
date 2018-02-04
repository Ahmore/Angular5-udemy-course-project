import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: 'recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(
        private recipesService: RecipesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.recipe = this.recipesService.getRecipe(+params["id"]);
            }
        );
    }

    onAddIngredientsToShoppingList() {
        this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
