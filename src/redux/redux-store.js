import { createStore, combineReducers } from "redux";
import movieReducer from "./movies-reducer";

let reducers = combineReducers({
    movies: movieReducer
});

let store = createStore(reducers);

//window.store = store;

export default store;