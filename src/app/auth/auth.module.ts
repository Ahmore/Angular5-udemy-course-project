import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],

    imports: [
        AuthRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AuthModule {}
