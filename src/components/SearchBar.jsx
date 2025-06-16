import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ searchTerm, onSearchChange, placeholder = "Search..." }) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputChange(e) {
    onSearchChange(e.target.value);
  }

  function clearSearch() {
    onSearchChange("");
  }

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="search-input"
        />
        {searchTerm && (
          <button type="button" onClick={clearSearch} className="clear-button">
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
