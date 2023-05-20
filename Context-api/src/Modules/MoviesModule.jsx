import React, { createContext, useCallback, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Movies = lazy(() => import("../components/Movies"));
//const Navbar =lazy(()=>import("./components/Navbar"))
const AddMovie = lazy(() => import("../components/AddMovie"));
const NotFound = lazy(() => import("../components/NotFound"));
const MovieDetails = lazy(() => import("../components/MovieDetails"));

export const MoviesContext = createContext();

const MoviesModule = () => {

  const [MoviesArr, setMovies] = useState([
    {
      Title: "The Lion King",
      Year: "2019",
      Runtime: "118 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    },
    {
      Title: "Mowgli: Legend of the Jungle",
      Year: "2018",
      Runtime: "104 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
    },
    {
      Title: "Doctor Strange",
      Year: "2016",
      Runtime: "115 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    },
    {
      Title: "John Wick",
      Year: "2014",
      Runtime: "101 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    },
    {
      Title: "The Notebook",
      Year: "2004",
      Runtime: "123 min",
    },
  ]);

  
  const addMovie = useCallback( (newMovie) => {
    setMovies((prevState) => [...prevState, newMovie]);
  },[]);

  const data = useMemo(
    () => ({ MoviesArr , addMovie }),
    [MoviesArr , addMovie]
  );

  return (
    <MoviesContext.Provider value={data}>
      <Routes>
        <Route index element={<Movies></Movies>}></Route>
        <Route path="add" element={<AddMovie></AddMovie>}></Route>
        <Route path=":title" element={<MovieDetails></MovieDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </MoviesContext.Provider>
  );
};

export default MoviesModule;
