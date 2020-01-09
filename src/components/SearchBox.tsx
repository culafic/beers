import React from "react";
import "./SearchBox.css";
import { IBeer } from "../inteface";

interface SearchBoxProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholde?: string;
  type: "text" | "number";
  value: any;
  beers?: IBeer[];
}

const SearchBox: React.FC<SearchBoxProps> = ({
  handleInput,
  type,
  placeholde
}) => {
  return (
    <div className="filter-search">
      <input
        type={type}
        onChange={handleInput}
        placeholder={placeholde || "Search beer"}
      />
    </div>
  );
};

export default SearchBox;
