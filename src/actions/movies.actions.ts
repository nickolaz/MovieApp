import { Dispatch } from "redux";
import { detailMovies, Iplot } from "../api/MoviesApi";
import { MoviesActionEnum } from "../reducers/movies";
import MoviesList from "../util/utils";

export const getMovies = ( search : string = 'movie' , year? : number ) => {
    return async ( dispatch : Dispatch ) => {
        let movies;
        if(year) {
            movies = await MoviesList(search , year);
        } else {
            movies = await MoviesList(search);
        }
        dispatch({
            type: MoviesActionEnum.GetMovies,
            payload: movies,
        });
    }
};

export const getMovieDetail = (imdbID : string) => {
    return async ( dispatch : Dispatch ) => {
        const movieDetail = await detailMovies(imdbID, Iplot.full);
        dispatch({
            type: MoviesActionEnum.GetMovieDetail,
            payload: movieDetail,
        });
    }
};

export const clearMovieDetail = () => {
    return async ( dispatch : Dispatch ) => {
        dispatch({
            type: MoviesActionEnum.GetMovieDetail,
            payload: null,
        });
    }
};