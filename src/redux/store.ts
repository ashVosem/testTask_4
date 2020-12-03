import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import movieReducer from "./reducers/movieReducer";

const reducers = combineReducers({ movie: movieReducer });

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

type reducersType = typeof reducers;
export type StateType = ReturnType<reducersType>;

export default store;
