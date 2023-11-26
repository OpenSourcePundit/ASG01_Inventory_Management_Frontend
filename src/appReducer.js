
const initialState = {inventory:[],saleTransactions:[],loading:false,error:null}

export const appReducer = (state = initialState,action) =>{
    switch(action.type){
            case "APP_LOADING":
            return{...state,loading:true}
            case "ADD_INVENTORY_SUCCESS":
            return{...state,loading:true}
            case "ADD_INVENTORY_FAILURE":
            return{...state,loading:true}
            case "UPDATE_INVENTORY_SUCCESS":
            return{...state,loading:true}
            case "UPDATE_INVENTORY_FAILURE":
            return{...state,loading:true}
            case "ADD_SALE_SUCCESS":
            return{...state,loading:true}
            case "ADD_SALE_FAILURE":
            return{...state,loading:true}
            case "DELETE_INVENTORY_SUCCESS":
            return{...state,loading:true}
            case "DELETE_INVENTORY_FAILURE":
            return{...state,loading:true}
            case "FETCH_INVENTORY_SUCCESS":
            return{...state,loading:true}
            case "FETCH_INVENTORY_FAILURE":
            return{...state,loading:true}
            case "FETCH_SALES_SUCCESS":
            return{...state,loading:true}
            case "FETCH_SALES_FAILURE":
            return{...state,loading:true}
        default:
            return(state)
        


    }

}