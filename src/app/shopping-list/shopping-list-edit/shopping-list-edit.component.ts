import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
    @Output()
    onIngredientAdded = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit() {
    }

    onAdd(name, quantity) {
        this.onIngredientAdded.emit(new Ingredient(
            name,
            quantity
        ));
    }
}
