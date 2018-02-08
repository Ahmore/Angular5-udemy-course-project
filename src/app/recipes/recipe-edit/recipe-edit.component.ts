import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    recipe: Recipe;
    editMode: boolean;
    private subsription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private recipesService: RecipesService
    ) {}

    ngOnInit() {
        this.subsription = this.route.params.subscribe(
            (params: Params) => {
                const id = +params["id"];
                this.editMode = (params["id"] != null);

                if (this.editMode) {
                    this.recipe = this.recipesService.getRecipe(id);
                }
            }
        )
    }

    ngOnDestroy() {
        this.subsription.unsubscribe();
    }
}
