import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const objStyle={backgroundColor:"pink" ,display:"flex", justifyContent:"space-evenly",padding:"10px"}
    return (
        <div style={objStyle}>
            <Link to='/'>Movies</Link>
            <Link to='/add'>Add movie</Link>
            {/* <Link to='/'>Home</Link>
            <Link to='/users'>users</Link>
            <Link to='/users/add'>AddUser</Link>
            <Link to='/item'>Item</Link> */}
        </div>
    );
};

export default Navbar;