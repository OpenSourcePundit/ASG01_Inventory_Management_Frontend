import { React, useState } from "react";
export const InventoryForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState();
  

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="input_section"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>Inventory Sheet</h2>
        <label htmlFor="invName">Name</label>
        <input
          className="invName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="invQuantity">Quantity</label>
        <input
          className="invQuantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="invPrice">Price</label>
        <input
          className="invPrice"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="invCategory">Category</label>
        <select
          className="invCategory"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {
            ["Electronics", "Stationary", "Food", "Furniture", "Sports", "Fashion", "Home & Kitchen"].map((category)=>{
              return(
                <option value={`${category}`}>{category}</option>
              )
            })
          }
        </select>
      </div>     
    </div>
  );
};
