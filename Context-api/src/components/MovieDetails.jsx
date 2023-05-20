import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext } from "../Modules/MoviesModule";
import { Link, useNavigate, useParams } from 'react-router-dom';



const MovieDetails = () => {
  const { MoviesArr } = useContext(MoviesContext);
  const navigate = useNavigate();
  const movieTitle = useParams().title;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundedMovie = MoviesArr.find((m) => {
      return m.Title === movieTitle;
    });

    if (!foundedMovie) navigate("/notFound");
    setMovie(foundedMovie);
  }, [MoviesArr, movie,movieTitle]);

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie?.Poster} alt={movie?.Title} />
      <div className="movie-title">{movie?.Title}</div>
      <div className="movie-year">{movie?.Year}</div>
      <div className="movie-runtime">{movie?.Runtime}</div>
      <Link to={`/`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default MovieDetails;