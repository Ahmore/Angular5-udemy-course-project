import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild("f") ingredientForm: NgForm;
    onIngredientSelectedSubscription: Subscription;
    editMode: boolean = false;
    editingItemIndex: number;
    editingItem: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.onIngredientSelectedSubscription = this.shoppingListService.onIngredientSelected
            .subscribe(
                (index: number) => {
                    this.editMode = true;
                    this.editingItemIndex = index;
                    this.editingItem = this.shoppingListService.getIngredient(index);
                    this.ingredientForm.setValue({
                        name: this.editingItem.name,
                        quantity: this.editingItem.quantity
                    })
                }
            )
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const ingredient = new Ingredient(
            value.name,
            value.quantity
        );

        if (this.editMode) {
            this.shoppingListService.editIngredient(this.editingItemIndex, ingredient);
        }
        else {
            this.shoppingListService.addIngredient(ingredient);
        }

        this.onReset();
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editingItemIndex);
        this.onReset();
    }

    onReset() {
        this.editMode = false;
        this.ingredientForm.resetForm();
    }

    ngOnDestroy() {
        this.onIngredientSelectedSubscription.unsubscribe();
    }
}
