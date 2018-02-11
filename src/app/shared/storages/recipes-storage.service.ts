import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Recipe} from "../../recipes/recipe.model";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"

@Injectable()
export class RecipesStorageService {
    constructor(
        private httpService: Http
    ) {}

    saveRecipes(recipes: Recipe[]): Observable<Recipe[]> {
        return this.httpService.put("https://udemy-angular5-532e4.firebaseio.com/recipes.json", recipes)
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
    }

    loadRecipes(): Observable<Recipe[]> {
        return this.httpService.get("https://udemy-angular5-532e4.firebaseio.com/recipes.json")
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
