import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "../auth/auth-guard.service";
import {AuthService} from "../auth/auth.service";
import {RecipesStorageService} from "../shared/storages/recipes-storage.service";
import {RecipesService} from "../recipes/recipes.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {AuthInterceptor} from "../shared/auth.interceptors";
import {LoggingInterceptor} from "../shared/logging.interceptor";

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
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
    ]
})
export class CoreModule {}
