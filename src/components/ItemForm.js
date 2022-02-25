import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("Produce");

  function handleProductName(event) {
    if (event.target.value !== "") {
      setProductName(event.target.value);
    }
  }

  function handleCategory(event) {
    setCategoryName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id:  uuid(),
      name: productName,
      category: categoryName,
    };
    props.onItemFormSubmit(newItem);
  };

  return (
    <form className="NewItem" onSubmit={handleFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleProductName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
