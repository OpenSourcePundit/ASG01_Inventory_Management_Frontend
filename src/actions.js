
export const addInventory = (newInventory) =>{
    return{
        type:'ADD_INVENTORY',
        payload:newInventory,
    }
}

export const deleteInventory =(inventoryId) =>{
    return{
        type:'DELETE_INVENTORY',
        payload:inventoryId
    }
}   
export const editInventory = (inventoryId,newObject) =>{
    return{
        type:'EDIT_INVENTORY',
        payload:{inventoryId,newObject}
    }
}
export const addSale =(saleTransaction) =>{
    return{
        type:'ADDSALE',
        payload:saleTransaction
    }
}
