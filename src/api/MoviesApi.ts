import { AxiosResponse } from "axios";
import { API } from ".";
import { AppConfig } from "../config/config";
import { MovieResponse } from "../models/responses";
import MovieDetailResponse from "../models/responses/MovieDetail.response";

export enum Iplot {
    'short',
    'full',
};

export const searchMovies = async ( search : string , year? : number , page : number = 1 ) => {
    let params = `?s=${search}&apikey=${AppConfig.apiKey}&page=${page}`;
    if ( year ) {
        params += `&y=${year}`;
    }
    const res : AxiosResponse<MovieResponse> = await API.get(AppConfig.apiBaseUrl + params );
    if(res.data.Response === 'False') {
        return null;
    }
    return res.data;
};

export const detailMovies = async ( imdbID : string , plot : Iplot ) => {
    const res : AxiosResponse<MovieDetailResponse> = await API.get(AppConfig.apiBaseUrl + `?i=${imdbID}&apikey=${AppConfig.apiKey}&plot=${plot}`);
    if(res.data.Response === 'False') {
        return null;
    }
    return res.data;
};