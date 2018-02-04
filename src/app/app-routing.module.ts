import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeAddComponent} from "./recipes/recipe-add/recipe-add.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeHomeComponent} from "./recipes/recipe-home/recipe-home.component";

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
                component: RecipeAddComponent
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
