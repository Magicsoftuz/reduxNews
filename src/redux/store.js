import { applyMiddleware, createStore } from "redux";
import { initialState, reducers } from "./reducers/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
