import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Page404 from "./components/page404/Page404";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
