import axios from "axios";
import { PureComponent } from "react";
import Movie from "./Movie";
import AddMovie from "./AddMovie";

class Item extends PureComponent{
    constructor(){
        super();
        this.state={Movies:null,
            MovieIndex: 0,
        }
    }  
    
    handlePreviousMovie = () => {
        this.setState((prevState) => ({
          MovieIndex: prevState.MovieIndex - 1,
        }));
      };
    
      handleNextMovie = () => {
        this.setState((prevState) => ({
          MovieIndex: prevState.MovieIndex + 1,
        }));
      };

      addMovie = (newMovie) => {
        console.log(newMovie);
        this.setState((prevState) => ({
          Movies: [...prevState.Movies, newMovie]
        }));
      }
      
      render(){
        
        if (!this.state.Movies) return <div>Loading......</div>;
        
        const { Movies, MovieIndex } = this.state;
        const currentMovie = Movies[MovieIndex];
        //console.log("cur is",currentMovie);
    
        return <div>
            
                <div className="movie-list">
                <Movie key={currentMovie.Title} movie={currentMovie} />
                </div>
                <div className="movie-buttons">
                    <button
                        className="movie-button"
                        onClick={this.handlePreviousMovie}
                        disabled={MovieIndex === 0}
                    >
                        Previous
                    </button>
                    <button
                        className="movie-button"
                        onClick={this.handleNextMovie}
                        disabled={MovieIndex === Movies.length - 1}
                    >
                        Next
                    </button>
                </div>
                <AddMovie addMovie={this.addMovie}></AddMovie>
        </div>
        
    }
    componentDidMount(){
    axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    .then ((res)=> {this.setState({Movies:res.data}, () => {
        //console.log(this.state.Movies);
      })} )
    .catch((error)=> console.log(error))
    }
}

export default Item;