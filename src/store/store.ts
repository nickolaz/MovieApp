import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducers/movies";

const reducers = combineReducers({
    movies: moviesReducer,
});

export const store = createStore( reducers , compose(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof reducers>;