import { useSearchContext } from "../../context/SearchContext";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

export const Results = () => {
  const { cocktails } = useSearchContext();

  return (
    <div>
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} initialData={cocktail} />
      ))}
    </div>
  );
};
