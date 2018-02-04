import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeHomeComponent} from "./recipes/recipe-home/recipe-home.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes = [
    {
        path: "shopping-list",
        component: ShoppingListComponent
    },

    {
        path: "recipes",
        component: RecipesComponent,
        children: [
            {
                path: "",
                component: RecipeHomeComponent,
                pathMatch: "full"
            },

            {
                path: "add",
                component: RecipeEditComponent
            },
            {
                path: ":id/edit",
                component: RecipeEditComponent
            },

            {
                path: ":id",
                component: RecipeDetailComponent
            }
        ]
    },

    {
        path: '**',
        redirectTo: '/recipes'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
