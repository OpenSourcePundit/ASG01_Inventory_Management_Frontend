// export const addInventory = (newInventory) =>(dispatch) =>{
//     try{
//         dispatch({type:'ADD_INVENTORY_LOADING'});
//         const response = await fetch('')
//         const data = await response.json()
//         dispatch({type:'ADD_INVENTORY_SUCCESS',payload:data})

//     }catch(error){
//         console.log("Error Adding inventory",error)
//         dispatch({type:'ADD_INVENTORY_FAILURE'})
//     }
// }

// export const deleteInventory =(inventoryId) =>{
//     return{
//         type:'DELETE_INVENTORY',
//         payload:inventoryId
//     }
// }
// export const editInventory = (inventoryId,newObject) =>{
//     return{
//         type:'EDIT_INVENTORY',
//         payload:{inventoryId,newObject}
//     }
// }
// export const addSale =(saleTransaction) =>{
//     return{
//         type:'ADDSALE',
//         payload:saleTransaction
//     }
// }

export const AddItem =(newItem) => async (dispatch) => {
  try {
    dispatch({ type: "APP_LOADING" });
    const response = await fetch(
      "https://inventory-management-osp.onrender.com/api/v1/items/new",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      },
    );
    //data has added item as "item" ,incase error data contains relevant error as "message"
    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_INVENTORY_SUCCESS", payload: data });
    } else {
      dispatch({ type: "ADD_INVENTORY_FAILURE", payload: data });
    }
  } catch (error) {
    console.log("Error Adding inventory:", error);
    dispatch({ type: "ADD_INVENTORY_FAILURE", payload: error });
  }
};

export const FetchItems =() => async (dispatch) => {
  console.log("function called1")
  try {
    dispatch({ type: "APP_LOADING" });
    console.log("function called2")
    const response = await fetch(
      "https://inventory-management-osp.onrender.com/api/v1/items/all",
      {
        method: "GET",
      },
    );
    //data has All items array as "allItems" ,incase error data contains relevant error as "message"
    const data = await response.json();
    console.log("function called3")
    if (data.success === true) {
      console.log("function called4")
      dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: data });
    } else {
      dispatch({ type: "FETCH_INVENTORY_FAILURE", payload: data });
    }
  } catch (error) {
    console.log("function called5")
    console.log("Error Adding inventory:", error);

    dispatch({ type: "FETCH_INVENTORY_FAILURE", payload: error });
  }
};

export const UpdateItem = async (itemId, updatedItem) => async (dispatch) => {
  try {
    dispatch({ type: "APP_LOADING" });
    const response = await fetch(
      `https://inventory-management-osp.onrender.com/api/v1/items/${itemId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.Stringify(updatedItem),
      },
    );
    //data has updated object as 'updatedItem' ,incase error data contains relevant error as "message"
    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "UPDATE_INVENTORY_SUCCESS", payload: data });
    } else {
      dispatch({ type: "UPDATE_INVENTORY_FAILURE", payload: data });
    }
  } catch (error) {
    console.log(`Error Updating Item ${itemId}:`, error);
    dispatch({ type: "UPDATE_INVENTORY_FAILURE", payload: error });
  }
};

export const Deleteitem = async () => async (dispatch) => {
  try {
    dispatch({ type: "APP_LOADING" });
    const response = await fetch(
      `https://inventory-management-osp.onrender.com/api/v1/items/${itemId}`,
      {
        method: "DELETE",
      },
    );
    //data has deleted object as 'deletedItem' ,incase error data contains relevant error as "message"
    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "DELETE_INVENTORY_SUCCESS", payload: data });
    } else {
      dispatch({ type: "DELETE_INVENTORY_FAILURE", payload: data });
    }
  } catch (error) {
    console.log(`Error deleting item ${itemId} :`, error);
    dispatch({ type: "DELETE_INVENTORY_FAILURE", payload: error });
  }
};

export const AddSale = async (newSaleItem) => async (dispatch) => {
  try {
    dispatch({ type: "APP_LOADING" });
    const response = await fetch(
      "https://inventory-management-osp.onrender.com/api/v1/sales/new",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSaleItem),
      },
    );
    //data has new sales array and item with  updated quantity,incase error data contains relevant error as "message"
    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_SALES_SUCCESS", payload: data });
    } else {
      dispatch({ type: "ADD_SALES_FAILURE", payload: data });
    }
  } catch (error) {
    console.log("Error Adding inventory:", error);
    dispatch({ type: "ADD_SALES_FAILURE", payload: error });
  }
};

export const FetchSales = async () => async (dispatch) => {
  try {
    dispatch({ type: "APP_LOADING" });
    const response = await fetch(
      "https://inventory-management-osp.onrender.com/api/v1/sales/all",
      {
        method: "GET",
      },
    );
    //data has All sales array ,incase error data contains relevant error as "message"
    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_SALES_SUCCESS", payload: data });
    } else {
      dispatch({ type: "ADD_SALES_FAILURE", payload: data });
    }
  } catch (error) {
    console.log("Error Adding inventory:", error);
    dispatch({ type: "ADD_SALES_FAILURE", payload: error });
  }
};
