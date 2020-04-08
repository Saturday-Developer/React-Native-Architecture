import { combineReducers } from 'redux';
import getAllBooks from '../reducer/books';

const rootReducer = combineReducers({
  getAllBooks,
});

export default rootReducer;
