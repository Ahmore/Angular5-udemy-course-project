import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../recipes/recipes.service";
import {Recipe} from "../recipes/recipe.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(
        private recipesService: RecipesService
    ) {
    }

    ngOnInit() {
    }

    onSave() {
        this.recipesService.saveRecipes().subscribe(
            (recipes: Recipe[]) => {
                console.log(recipes);
            }
        );
    }

    onLoad() {
        this.recipesService.loadRecipes().subscribe(
            (recipes: Recipe[]) => {
                console.log(recipes);
            }
        );
    }
}
