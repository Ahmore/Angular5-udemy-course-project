import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output()
    onRoute = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
        this.onRoute.emit("RECIPES");
    }

    onChange(route: string) {
        this.onRoute.emit(route);
    }
}
