import { React, useState } from "react";
import { useSelector } from "react-redux";
export const InventoryForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState();
  const inventory = useSelector((state) => state?.inventory);

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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="details_section">
        <h2>Inventory Detail:</h2>
        {inventory?.length === 0 ? (
          <p>No Products in inventory</p>
        ) : (
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
            {inventory?.map((singleInventory) => {
              return (
                <tr>
                  <td>{singleInventory.name}</td>
                  <td>{singleInventory.quantity}</td>
                  <td>{singleInventory.price}</td>
                  <td>{singleInventory.category}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};
