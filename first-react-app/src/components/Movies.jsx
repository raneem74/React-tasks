import { useState } from "react";
import Movie from "./Movie";
import {v4 as uuid} from 'uuid';

const Movies = () => {
    const [moviesArr]=useState([
        {id:uuid(), name:"Titanic",rate:10},
        {id:uuid(), name:"Fight club",rate:8},
        {id:uuid(), name:"The god father",rate:7},
        {id:uuid(), name:"Interstellar",rate:10},
        {id:uuid(), name:"The meg",rate:6},
    ]);
    return (
        <div>{moviesArr.map((m)=><Movie key={m.id} {...m}></Movie>)}</div>
    );
};

export default Movies;