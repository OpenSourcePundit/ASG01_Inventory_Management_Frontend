const initialState = {
  inventory: [],
  saleTransactions: [],
  loading: false,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP_LOADING":
      return { ...state, loading: true };
    case "ADD_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: inventory.push(action.payload),
        loading: false,
        error: null,
      };
    case "ADD_INVENTORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.message || "Error Adding Item",
      };
    case "UPDATE_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: inventory
          .filter((item) => item._id !== action.payload.updatedItem._id)
          .push(action.payload.updatedItem),
        loading: false,
        error: null,
      };
    case "UPDATE_INVENTORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.message || "Error Updating Item",
      };
    case "ADD_SALE_SUCCESS":
      return {
        ...state,
        saleTransactions: action.payload.newSale,
        inventory: inventory
          .filter((item) => item._id !== action.payload.newItem._id)
          .push(action.payload.newItem),
        loading: false,
        error: null,
      };
    case "ADD_SALE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.message || "Error Adding Sales",
      };
    case "DELETE_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: inventory.filter(
          (item) => item._id !== action.payload.deleteditem._id,
        ),
        loading: false,
        error: null,
      };
    case "DELETE_INVENTORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.message || "Error Deleting Item",
      };
    case "FETCH_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: action.payload.allItems,
        loading: false,
        error: action.payload.message || "Error Fetching Inventory",
      };
    case "FETCH_INVENTORY_FAILURE":
      
      return { ...state, loading: false, error: null };
    case "FETCH_SALES_SUCCESS":
      return {
        ...state,
        saleTransactions: action.payload.allSale,
        loading: false,
        error: null,
      };
    case "FETCH_SALES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.message || "Error Fetching Sales",
      };
    default:
      return state;
  }
};
