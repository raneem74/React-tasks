import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-year">{movie.Year}</div>
        <div className="movie-runtime">{movie.Runtime}</div>
        <Link to={`/${movie.Title}`}><button >view Details</button></Link>
    </div>
  );
};

export default Movie;
