import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    recipe: Recipe;
    editMode: boolean;

    constructor(
        private route: ActivatedRoute,
        private recipesService: RecipesService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                const id = +params["id"];
                this.editMode = (params["id"] != null);

                if (this.editMode) {
                    this.recipe = this.recipesService.getRecipe(id);
                }
            }
        )
    }

}
