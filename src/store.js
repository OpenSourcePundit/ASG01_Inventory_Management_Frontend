import {createStore,applyMiddleware} from 'redux'
import {appReducer} from './appReducer'
const store = createStore(appReducer,applyMiddleware(thunk))

export default store 