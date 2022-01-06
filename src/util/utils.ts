import { detailMovies, Iplot, searchMovies } from "../api/MoviesApi";
import Movie from "../models/entitys/Movie.entity";

const MoviesList = async ( search : string , year? : number ) => {
    const list : Movie[] = [];
    let resp ;
    if(year) {
        resp = await searchMovies(search , year);
    } else {
        resp = await searchMovies(search);
    }
    if(resp) {
        for (const movie of resp.Search) {
            const detailResp = await detailMovies(movie.imdbID, Iplot.short);
            if(detailResp) {
                const movie : Movie = {
                    imdbID: detailResp.imdbID,
                    Title: detailResp.Title,
                    Poster: detailResp.Poster,
                    imdbRating: detailResp.imdbRating,
                    Plot: detailResp.Plot,
                };
                list.push(movie);
            } 
        }    
        return list;
    }
    return list;
};

export default MoviesList;