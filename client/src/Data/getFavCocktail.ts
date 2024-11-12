interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

interface ApiResponse {
  drinks: Drink[];
}

export async function getFavCocktail(ids: string[]): Promise<ApiResponse[]> {
  const url = (id: string) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const fetchPromises = ids.map((id) =>
      fetch(url(id), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        const data: ApiResponse = await response.json();
        return data;
      }),
    );

    const data = await Promise.all(fetchPromises);

    return data;
  } catch (error) {
    console.error(
      "An error occurred:",
      error instanceof Error ? error.message : error,
    );
    return [];
  }
}
