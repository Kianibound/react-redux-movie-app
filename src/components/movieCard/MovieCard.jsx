import React from "react";
import "./movieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="crad-top">
          <img src={movie.Poster} alt="movie Poster" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
