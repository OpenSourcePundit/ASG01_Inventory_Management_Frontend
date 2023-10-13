import {createStore} from 'redux'
import {inventoryReducer} from './inventoryReducer'
const store = createStore(inventoryReducer)

export default store 