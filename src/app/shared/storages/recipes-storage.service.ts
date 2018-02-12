import {Injectable} from "@angular/core";
import {Recipe} from "../../recipes/recipe.model";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RecipesStorageService {
    constructor(
        private httpClientService: HttpClient
    ) {}

    saveRecipes(recipes: Recipe[]): Observable<Recipe[]> {
        return this.httpClientService.put<Recipe[]>("https://udemy-angular5-532e4.firebaseio.com/recipes.json", recipes);
    }

    loadRecipes(): Observable<Recipe[]> {
        return this.httpClientService.get<Recipe[]>("https://udemy-angular5-532e4.firebaseio.com/recipes.json")
            .map(
                (recipes: Recipe[]) => {
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
