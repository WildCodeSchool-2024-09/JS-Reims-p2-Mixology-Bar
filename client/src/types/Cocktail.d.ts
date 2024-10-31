export interface Cocktail {
  id: number;
  name: string;
  description: string;
  picture: string;
  ingredients: Ingredient[];
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strInstructions: string;
  strImageSource?: string;
}

interface Ingredient {
  name: string;
  measure: string;
}
