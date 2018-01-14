import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            "New recipe",
            "There is the best recipe",
            "https://paprikaapp.com/media/web/images/help/windows/recipe.png"
        ),

        new Recipe(
            "New recipe",
            "There is the best recipe",
            "https://paprikaapp.com/media/web/images/help/windows/recipe.png"
        )
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
