import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Recipe} from "../../recipes/recipe.model";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class RecipesStorageService {
    constructor(
        private authService: AuthService,
        private httpService: Http
    ) {}

    saveRecipes(recipes: Recipe[]): Observable<Recipe[]> {
        const token: string = this.authService.getToken();

        return this.httpService.put("https://udemy-angular5-532e4.firebaseio.com/recipes.json?auth=" + token, recipes)
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
    }

    loadRecipes(): Observable<Recipe[]> {
        const token: string = this.authService.getToken();

        return this.httpService.get("https://udemy-angular5-532e4.firebaseio.com/recipes.json?auth=" + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();

                    for (let recipe of recipes) {
                        if (!recipe["ingredients"]) {
                            recipe["ingredients"] = [];
                        }
                    }

                    return recipes;
                }
            )
    }
}
