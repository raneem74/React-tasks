
import { useContext ,memo } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../Modules/MoviesModule";

const Item = () => {

  const {MoviesArr} = useContext(MoviesContext);

  
    if (!MoviesArr) return <div>Loading......</div>;
    return (
      <div>
        <div className="movie-list">
          {MoviesArr.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    );
  
};

export default memo(Item);
