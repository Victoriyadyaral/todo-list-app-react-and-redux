import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import todosReducer from './todos/todos-reducer';

const rootReducer = combineReducers({
//   todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;