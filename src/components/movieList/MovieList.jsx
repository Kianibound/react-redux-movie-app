import React from "react";
import { useSelector } from "react-redux";
import "./movieList.scss";
import {
  getAllMovies,
  getAllSeries,
} from "../../features(redux)/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import Slider from "react-slick";
import { settings } from "../../utils/settings";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  console.log(series);

  const MoviesList = movies ? (
    movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
  ) : (
    <div className="movies-error">
      <h3>Error Fetching series! Maybe word you searched is not exited</h3>
    </div>
  );
  const seriesList = series ? (
    series.map((movie, index) => <MovieCard key={index} movie={movie} />)
  ) : (
    <div className="movies-error">
      <h3>Error Fetching series! Maybe word you searched is not exited</h3>
    </div>
  );

  return (
    <div className="movieWrapper">
      <div className="movieList">
        <h2>Movies</h2>
        <hr />
        <div className="moviesContainer">
          <Slider {...settings}>{MoviesList}</Slider>
        </div>
      </div>
      <div className="seriesList">
        <h2>Series</h2>
        <hr />
        <div className="seriesContainer">
          <Slider {...settings}>{seriesList}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
