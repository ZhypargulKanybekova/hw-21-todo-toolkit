import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todo/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
