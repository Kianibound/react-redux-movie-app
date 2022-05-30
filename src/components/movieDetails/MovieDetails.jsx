import React, { useEffect } from "react";
import "./movieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDetails,
  getFullDetails,
  removeSelected,
} from "../../features(redux)/movies/movieSlice";
import {
  BsStarFill,
  BsFillHandThumbsUpFill,
  BsFillClockFill,
  BsFillCalendarCheckFill,
} from "react-icons/bs";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const details = useSelector(getFullDetails);

  useEffect(() => {
    dispatch(fetchDetails(imdbID));
    console.log(details);
    return () => {
      dispatch(removeSelected());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(details).length === 0 ? (
        <h1>Please Wait...</h1>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{details?.Title}</div>
            <div className="movie-rating">
              <span>
                <BsStarFill className="starIcon" />
                Rate:{details?.imdbRating}
              </span>
              <span>
                <BsFillHandThumbsUpFill className="thumbsIcon" />
                Votes: {details?.imdbVotes}
              </span>
              <span>
                Run time: <BsFillClockFill className="timeIcon" /> :{" "}
                {details?.Runtime}
              </span>
              <span>
                Year <BsFillCalendarCheckFill className="yearIcon" /> :{" "}
                {details?.Year}
              </span>
            </div>
            <div className="movie-plot">{details?.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{details?.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{details?.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{details?.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{details?.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{details?.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={details?.Poster} alt={details.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
