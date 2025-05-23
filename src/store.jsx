
import {createStore, combineReducers} from 'redux'

// Reducer imports
import ToodReducers from './reducers/TodoReducers'

const reducer = combineReducers({todo: ToodReducers})
const store = createStore(reducer)

export default store;