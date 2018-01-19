import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    route: string = "";
    title = 'app';

    onRoute(route: string) {
        this.route = route;
    }
}
