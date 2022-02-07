import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { clothesReducer } from "../redux/reducers/AdminReducer";
import { clothesClientReducer } from "../redux/reducers/ClientReducer";

const rootReducer = combineReducers({ clothesReducer, clothesClientReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
