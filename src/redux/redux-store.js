import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import sentenceReducer from "./sentence-reducer.js";
import authReducer from "./auth-reducer.js";
import usersReducer from "./users-reducer.js";


import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    auth : authReducer,
    sentence : sentenceReducer,
    users : usersReducer,


});

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


let store = createStore(reducers, composeEnhances(applyMiddleware(thunkMiddleware)));

window.store = store;


export default store;
