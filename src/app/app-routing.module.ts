import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeHomeComponent} from "./recipes/recipe-home/recipe-home.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuard} from "./auth/auth-guard.service";

const appRoutes = [

    { path: "shopping-list", component: ShoppingListComponent },
    { path: "recipes", component: RecipesComponent, children: [
        { path: "", component: RecipeHomeComponent, pathMatch: "full" },
        { path: "add", component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ":id/edit", component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ":id", component: RecipeDetailComponent }
    ]},
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: '**', redirectTo: '/recipes' }
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
