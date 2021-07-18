import { createStore, combineReducers } from 'redux';
import budgetReducer from './reducers/budgetReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  budgets: budgetReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
