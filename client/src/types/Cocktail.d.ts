export interface Ingredient {
  name: string;
  measure: string;
}

export interface Cocktail {
  id?: number;
  name?: string;
  description?: string;
  picture?: string;

  idDrink?: string;
  strDrink?: string;
  strAlcoholic?: string;
  strInstructions?: string;
  strImageSource?: string;
  strDrinkThumb?: string;
  ingredients?: Ingredient[];
}

export interface CocktailCardProps {
  cocktailId?: string;
  initialData?: Cocktail;
}

export interface BasicCocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
