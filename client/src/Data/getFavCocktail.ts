export async function getFavCocktail(ids: string[]) {
  const url = (id: string) => 
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  
console.log(ids)
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
        return response.json();
      }),
    );

    const data = await Promise.all(fetchPromises);
    return data;
  } catch (error) {
    if (error instanceof Error)
      console.error("An error occurred:", error.message);
  }
}
