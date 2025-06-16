import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import "./FilteredList.css";

function FilteredList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // Get unique categories when items change
  useEffect(() => {
    const uniqueCategories = [];
    items.forEach((item) => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });
    setCategories(["All", ...uniqueCategories]);
  }, [items]);

  // Filter items when search term or category changes
  useEffect(() => {
    let filtered = items;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredItems(filtered);
  }, [items, searchTerm, selectedCategory]);

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="filtered-list">
      <div className="filters">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          placeholder="Search by name or email..."
        />
        <div className="category-filter">
          <label htmlFor="category-select">Filter by category:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-info">
        Showing {filteredItems.length} of {items.length} items
      </div>

      <ItemList items={filteredItems} />
    </div>
  );
}

export default FilteredList;
