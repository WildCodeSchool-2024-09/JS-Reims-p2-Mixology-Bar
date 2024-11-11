import React, { createContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
};

type SearchContextType = {
  cocktails: Cocktail[];
  fetchCocktails: (query: string) => void;
  filterAlcoholic: (isAlcoholic: boolean | null) => void;
  filterByIngredient: (ingredient: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [isAlcoholic, setIsAlcoholic] = useState<boolean | null>(null);
  const [ingredient, setIngredient] = useState<string>("");

  const fetchCocktails = useCallback(
    async (query: string) => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
        );
        const data = await response.json();

        const drinks: Cocktail[] = data.drinks;

        const filteredCocktails = drinks.filter((drink) => {
          const matchesAlcoholic =
            isAlcoholic === null
              ? true
              : isAlcoholic
                ? drink.strAlcoholic === "Alcoholic"
                : drink.strAlcoholic === "Non_Alcoholic";

          const matchesIngredient =
            ingredient === "" ||
            Array.from({ length: 15 }).some((_, i) => {
              const ingredientField =
                drink[`strIngredient${i + 1}` as keyof Cocktail];
              return (
                typeof ingredientField === "string" &&
                ingredientField.toLowerCase().includes(ingredient.toLowerCase())
              );
            });

          return matchesAlcoholic && matchesIngredient;
        });

        setCocktails(filteredCocktails);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
      }
    },
    [isAlcoholic, ingredient],
  );

  const filterAlcoholic = (isAlcoholic: boolean | null) => {
    setIsAlcoholic(isAlcoholic);
    fetchCocktails("");
  };

  const filterByIngredient = (ingredient: string) => {
    setIngredient(ingredient);
    fetchCocktails("");
  };

  useEffect(() => {
    fetchCocktails("");
  }, [fetchCocktails]);

  return (
    <SearchContext.Provider
      value={{ cocktails, fetchCocktails, filterAlcoholic, filterByIngredient }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
