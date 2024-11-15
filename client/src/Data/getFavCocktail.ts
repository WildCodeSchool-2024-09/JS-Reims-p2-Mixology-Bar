import type { Drink, ApiResponse } from "../types/Cocktail"

export async function getFavCocktail(ids: string[]): Promise<Drink[]> {
  const url = (id: string) =>
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const fetchPromises = ids
      .filter((id) => id)
      .map(async (id) => {
        const response = await fetch(url(id));
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        return data.drinks[0];
      });

    const data = await Promise.all(fetchPromises);
    return data; 
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
}
