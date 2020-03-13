import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import filmsReducer from "./filmsReducer";
import thunk from "redux-thunk";



const reducers = combineReducers({
    films: filmsReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;



const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

//window.store = store;

export default store;