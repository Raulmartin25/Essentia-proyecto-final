import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="navbar__search">
      <input
        type="text"
        placeholder="Buscar ropa y accesorios..."
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
