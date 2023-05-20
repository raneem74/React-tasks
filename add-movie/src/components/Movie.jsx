import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-year">{movie.Year}</div>
        <div className="movie-runtime">{movie.Runtime}</div>
    </div>
  );
};

export default Movie;
