import Movie from "../../models/entitys/Movie.entity";
import MovieDetailResponse from "../../models/responses/MovieDetail.response";

interface MoviesStateModel {
    moviesList: Movie[];
    movieDetail: MovieDetailResponse | null;
};

export default MoviesStateModel;