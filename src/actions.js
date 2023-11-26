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

export const AddItem = async (newItem) => {
  console.log("huurraaah", newItem);
  console.log("stringify", JSON.stringify(newItem));
  try {
    // dispatch({type:'ADD_INVENTORY_LOADING'});
    const response = await fetch(
      "https://inventory-management-osp.onrender.com/api/v1/items/new",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      },
    );
    const data = await response.json();
    console.log(data);
    // dispatch({type:'ADD_INVENTORY_SUCCESS',payload:data})
  } catch (error) {
    console.log("Error Adding inventory", error);
    // dispatch({type:'ADD_INVENTORY_FAILURE'})
  }
};
