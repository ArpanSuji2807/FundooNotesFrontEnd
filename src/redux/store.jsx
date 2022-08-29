import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { ReducerDrawer } from './reducerDrawer';

const reducer = combineReducers({
	ReducerDrawer: ReducerDrawer
	
});

const store = createStore(reducer)

export default store;