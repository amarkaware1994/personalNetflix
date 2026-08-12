import React,{useState} from 'react'
import MovieCard from '../cards/MovieCard';

const apiToken = import.meta.env.VITE_TMDB_READ_API_TOKEN;
function TrendinVideo() {

    const [movies, setMovies] = React.useState([]);

    function getPopularMovies() {
    console.log("getPopularMovies called");
    
    console.log("apiToken"  + apiToken);
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: 'Bearer ' + apiToken},
    };

fetch(url, options)
  .then(res => res.json())
  .then(json => {console.log(json); setMovies(json.results);})
  .catch(err => console.error(err));
    }   

  return (
    <div>
        <h1>Trending Videos</h1>
        <button onClick={getPopularMovies}>Get Popular Movies</button>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">    
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        
    </div>
  )
}

export default TrendinVideo
