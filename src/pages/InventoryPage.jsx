import { AddItem } from "../actions";
import { InventoryForm } from "../components/inventoryForm";
const InventoryPage = () => {
  return (
    <div>
      <h1 className="heading">Inventory Page</h1>
      <button
        onClick={() =>
          AddItem({
            name: "Heater",
            quantity: 26,
            price: 799,
            category: "Electronics",
          })
        }
      >
        AddItem
      </button>
      <InventoryForm />
    </div>
  );
};

export default InventoryPage;
