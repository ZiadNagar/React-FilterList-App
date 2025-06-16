import "./ItemList.css";

function ItemList({ items }) {
  if (items.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🔍</div>
        <h3>No results found</h3>
        <p>Try adjusting your search terms or filters</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <div className="item-header">
            <h3 className="item-name">{item.name}</h3>
            <span
              className={`item-category category-${item.category.toLowerCase()}`}
            >
              {item.category}
            </span>
          </div>
          <div className="item-details">
            <div className="item-email">
              <span className="email-icon">📧</span>
              {item.email}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
