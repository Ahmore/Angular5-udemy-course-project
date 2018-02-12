import {NgModule} from "@angular/core";

import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        DropdownDirective
    ],

    imports: [
        HttpModule
    ],

    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule {}
