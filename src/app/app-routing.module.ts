import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" },
    { path: '', component: HomeComponent, pathMatch: "full" }
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
