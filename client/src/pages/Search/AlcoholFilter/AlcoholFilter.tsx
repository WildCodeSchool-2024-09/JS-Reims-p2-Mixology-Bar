import { useSearchContext } from "../../../context/SearchContext";
import "./AlcoholFilter.css";

export const AlcoholFilter = () => {
  const { filterAlcoholic } = useSearchContext();

  return (
    <div className="alcohol-button-container">
      <button type="button" className="alcohol-button" onClick={() => filterAlcoholic(true)}>
        Alcoholic
      </button>
      <button type="button" className="alcohol-button" onClick={() => filterAlcoholic(false)}>
        Non-Alcoholic
      </button>
      <button type="button" className="alcohol-button" onClick={() => filterAlcoholic(null)}>
        All
      </button>
    </div>
  );
};
