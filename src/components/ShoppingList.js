import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, passNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchText(event) {
    if (event.target.value != null) {
      setSearchText(event.target.value);
    }
  }

  function handleNewItem(item) {
      passNewItem(item);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsFromSearch = itemsToDisplay.filter((item) => {
    if (searchText === null) return true;
    
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem} />
      <Filter search={searchText} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchText} />
      <ul className="Items">
        {itemsFromSearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
