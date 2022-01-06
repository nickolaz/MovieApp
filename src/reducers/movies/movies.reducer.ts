import { MoviesActionEnum } from ".";
import MoviesStateModel from "./movies.state";

type MoviesState = MoviesStateModel;

type MoviesAction = {
    type: MoviesActionEnum,
    payload: MoviesStateModel
};

const initialState: MoviesState = {
    moviesList: [],
    movieDetail: null,
};

const moviesReducer = (state: MoviesState = initialState, action: MoviesAction) => {
    switch (action.type) {
        case MoviesActionEnum.GetMovies:
            return {
                ...state,
                moviesList: action.payload,
            };
        case MoviesActionEnum.GetMovieDetail:
            return {
                ...state,
                movieDetail: action.payload,
            };
        default:
            return state;
    }
};

export default moviesReducer;