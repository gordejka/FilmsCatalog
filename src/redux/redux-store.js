import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "./movies-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    movies: movieReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

//window.store = store;

export default store;