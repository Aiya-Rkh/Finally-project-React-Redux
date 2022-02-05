import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { clothesReducer } from "../redux/reducers/AdminReducer";

const rootReducer = combineReducers({ clothesReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
