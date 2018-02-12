import {NgModule} from "@angular/core";

import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        DropdownDirective
    ],

    imports: [
        HttpClientModule
    ],

    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule {}
