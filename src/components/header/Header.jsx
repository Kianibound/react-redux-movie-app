import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  fetchMovie,
  fetchSeries,
} from "../../features(redux)/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    dispatch(fetchMovie(search));
    dispatch(fetchSeries(search));
    setSearch("");
  };
  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            placeholder="Search Movie or Series"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
