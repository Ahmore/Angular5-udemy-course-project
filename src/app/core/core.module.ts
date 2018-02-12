import {NgModule} from "@angular/core";

import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "../auth/auth-guard.service";
import {AuthService} from "../auth/auth.service";
import {RecipesStorageService} from "../shared/storages/recipes-storage.service";
import {RecipesService} from "../recipes/recipes.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],

    imports: [
        SharedModule,
        AppRoutingModule
    ],

    exports: [
        AppRoutingModule,
        HeaderComponent
    ],

    providers: [
        ShoppingListService,
        RecipesService,
        RecipesStorageService,
        AuthService,
        AuthGuard
    ]
})
export class CoreModule {}
