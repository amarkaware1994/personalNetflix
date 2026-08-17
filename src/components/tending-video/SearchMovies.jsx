import React from 'react'
import MovieCard from '../cards/MovieCard';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const apiToken = import.meta.env.VITE_TMDB_READ_API_TOKEN;
function SearchMovies() {   
    const [movies, setMovies] = React.useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

        useEffect(() => {
            console.log("getSearchMoviesMatchText useEffect called");
            const timer = setTimeout(async () => {  
                getSearchMoviesMatchText();
            }, 500); // Delay of 500 milliseconds

            return () => clearTimeout(timer); // Cleanup the timer on unmount or when searchText changes
        }, [query]);


        function getSearchMoviesMatchText() {
            console.log("getSearchMoviesMatchText called");
            
            const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
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
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">    
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
    </div>
  )
}

export default SearchMovies
