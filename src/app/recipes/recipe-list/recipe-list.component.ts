import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    onRecipesChangedSubscription: Subscription;

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        this.recipes = this.recipesService.getRecipes();

        this.onRecipesChangedSubscription = this.recipesService.onRecipesChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        )
    }

    ngOnDestroy() {
        this.onRecipesChangedSubscription.unsubscribe();
    }
}
