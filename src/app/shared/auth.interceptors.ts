import {HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpEvent} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {AuthService} from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();

        const copiedReq = req.clone({
           params: req.params.append("auth", token)
        });

        return next.handle(copiedReq);
    }

}
