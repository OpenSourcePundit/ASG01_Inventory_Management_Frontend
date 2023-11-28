import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AddItem, FetchItems } from "../actions";
import { InventoryForm } from "../components/inventoryForm";
const InventoryPage = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state?.inventory);

  useEffect(() => {
    dispatch(FetchItems());
  }, [dispatch]);

  return (
    <div>
      <h1 className="heading">Inventory Page</h1>
      <button
        onClick={() =>
          // AddItem({
          //   name: "Heater11",
          //   quantity: 26,
          //   price: 799,
          //   category: "Electronics",
          // })
          {
            console.log("function called");
            dispatch(FetchItems());
            console.log("function called");
          }
        }
      >
        AddItem
      </button>
      <InventoryForm />
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
                <tr key={singleInventory._id}>
                  <td>{singleInventory._id}</td>
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

export default InventoryPage;
