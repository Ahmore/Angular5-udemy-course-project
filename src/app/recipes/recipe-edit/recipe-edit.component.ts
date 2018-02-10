import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {Subscription} from "rxjs";
import {FormGroup, FormControl, FormArray, Validator, Validators} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    recipe: Recipe;
    recipeId: number;
    editMode: boolean;
    private subscription: Subscription;
    recipeForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private recipesService: RecipesService
    ) {}

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: Params) => {
                this.recipeId = +params["id"];
                this.editMode = (params["id"] != null);


                if (this.editMode) {
                    this.recipe = this.recipesService.getRecipe(this.recipeId);
                }

                this.initForm();
            }
        )
    }

    private initForm() {
        let name = null;
        let imagePath = null;
        let description = null;
        let ingredients = [];

        if (this.editMode) {
            name = this.recipe.name;
            imagePath = this.recipe.imagePath;
            description = this.recipe.description;
            ingredients = this.recipe.ingredients.map(
                (ingredient: Ingredient) => {
                    return new FormGroup({
                        "name": new FormControl(ingredient.name, [
                            Validators.required
                        ]),
                        "quantity": new FormControl(ingredient.quantity, [
                            Validators.required,
                            Validators.pattern(/^[1-9]+[0-9]*$/)
                        ])
                    });
                }
            );
        }

        this.recipeForm = new FormGroup({
            "name": new FormControl(name, [Validators.required]),
            "imagePath": new FormControl(imagePath, [Validators.required]),
            "description": new FormControl(description, [Validators.required]),
            "ingredients": new FormArray(ingredients)
        });
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get("ingredients")).push(
            new FormGroup({
                "name": new FormControl(null, [
                    Validators.required
                ]),
                "quantity": new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
        )
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
    }

    onSubmit() {
        const recipe = new Recipe(
            this.recipeForm.value["name"],
            this.recipeForm.value["description"],
            this.recipeForm.value["imagePath"],
            this.recipeForm.value["ingredients"],
        );

        if (this.editMode) {
            this.recipesService.editRecipe(this.recipeId, recipe);
        }
        else {
            this.recipeId = this.recipesService.addRecipe(recipe);
        }

        this.router.navigate(["/recipes", this.recipeId]);
    }

    onCancel() {
        this.router.navigate(["../"], {
            relativeTo: this.route
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
