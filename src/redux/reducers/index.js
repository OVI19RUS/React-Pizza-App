import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import filterReducer from './filters'

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filterReducer
})

export default rootReducer;