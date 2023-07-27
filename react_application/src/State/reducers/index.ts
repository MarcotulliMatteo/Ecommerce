import { combineReducers } from 'redux';
import productReducer from './productReducer';

const reducers = combineReducers({
    productReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;