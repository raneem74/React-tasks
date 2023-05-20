import React, { useContext, useState } from 'react';
import { MoviesContext } from "../Modules/MoviesModule";
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {



    const [movieData,setMovieData]=useState({Title:'',Year:'',Runtime:'',Poster:''});
    const {addMovie} = useContext(MoviesContext);
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
       event.preventDefault();
       addMovie(movieData);
       setMovieData({Title:'',Year:'',Runtime:'',Poster:''});
       navigate("/");
    }

const handleChange=(e)=>{
    const {name,value}=e.target;
    setMovieData({...movieData,[name]:value})  //computedproperty

}

    return (
       <form onSubmit={handleSubmit}>
            <label>Title : </label><input name='Title' type='text' value={movieData.Title} onChange={handleChange}></input>
            <br/>
            <label>Year : </label><input name='Year' type='number' value={movieData.Year} onChange={handleChange}></input>
            <br/>
            <label>Runtime : </label><input name='Runtime' type='text' value={movieData.Runtime} onChange={handleChange}></input>
            <br/>
            <label>Poster : </label><input name='Poster' type='text' value={movieData.Poster} onChange={handleChange}></input>
            <br/>
            <input type='submit'></input>
       
       </form>
    );
};

export default AddMovie;