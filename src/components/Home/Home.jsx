import React, { useEffect } from "react";
import "./home.scss";
import MovieList from "../movieList/MovieList";
import { useDispatch } from "react-redux";
import {
  fetchMovie,
  fetchSeries,
} from "../../features(redux)/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const defaultMovieSearch = "harry";
  const defaultSeriesSearch = "office";

  useEffect(() => {
    dispatch(fetchMovie(defaultMovieSearch));
    dispatch(fetchSeries(defaultSeriesSearch));
  }, [dispatch]);
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default Home;
