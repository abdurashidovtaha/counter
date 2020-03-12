import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counters";
import thunk from "redux-thunk";

const store = createStore(
    counterReducer,
    applyMiddleware(thunk)
);

console.log(store);
console.log(store.getState());

export default store;