import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RecipesComponent} from "./recipes.component";
import {RecipeHomeComponent} from "./recipe-home/recipe-home.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";

const recipesRoutes: Routes = [
    { path: "", component: RecipesComponent, pathMatch: "full", children: [
        { path: "", component: RecipeHomeComponent, pathMatch: "full" },
        { path: "add", component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ":id/edit", component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ":id", component: RecipeDetailComponent }
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}
