import React from "react";
import "./table.css";
import { deleteItem, toUpdateItem } from "../../actions/itemsAction";
import { useDispatch } from "react-redux";

const ItemTable = ({ data, setModal }) => {
  const dispatch = useDispatch();

  const handleUpdate = (item) => {
    setModal(true);
    dispatch(toUpdateItem(item));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => dispatch(deleteItem(item._id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
