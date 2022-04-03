import { Recipe } from "./recipe.model";
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Second Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); //slice() returns a copy of the array, will not change the original array
  }
}