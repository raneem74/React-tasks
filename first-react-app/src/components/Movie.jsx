import React from 'react';


const Movie = (props)=>{
    const {name, rate} = props;

    return (
        <div style={{ backgroundColor: 'violet', width: '70%', margin: '10px auto' }}>
        <div>name: {name}</div>
        <div>age: {rate}</div>
      </div>
    );
};



export default Movie;
