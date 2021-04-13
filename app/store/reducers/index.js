import {combineReducers} from 'redux';
import sudokuReducer from './sudokuReducer';

const reducer = combineReducers({sudokuReducer});

export default reducer;