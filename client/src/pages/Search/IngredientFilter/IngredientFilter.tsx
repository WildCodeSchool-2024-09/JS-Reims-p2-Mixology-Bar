import { useState } from "react";
import { useSearchContext } from "../../../context/SearchContext";
import "./IngredientFilter.css"

export const IngredientFilter = () => {
  const [ingredient, setIngredient] = useState("");
  const { filterByIngredient } = useSearchContext();

  const handleFilter = () => {
    filterByIngredient(ingredient);
  };

  return (
    <div className="ingredient-container">
      <input className="ingredient-input"
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Filter by ingredient"
      />
      <button type="button" className="ingredient-button" onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};
