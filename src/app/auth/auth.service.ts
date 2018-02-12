import * as firebase from "firebase"
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    private token: string;

    constructor(
       private router: Router
    ) {}

    signupUser(email: string, password: string): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signinUser(email: string, password: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response) => {
                this.updateToken();
                this.router.navigate(["/"]);

                return response;
            }
        )
    }

    signout() {
        firebase.auth().signOut();
        this.token = null;

        this.router.navigate(["/"]);
    }

    private updateToken(): Promise<any> {
        return firebase.auth().currentUser.getToken().then(
            (token: string) => this.token = token
        )
    }

    getToken() {
        this.updateToken();

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
