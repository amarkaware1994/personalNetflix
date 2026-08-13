import React from "react";
import { NavLink } from "react-router-dom";
import { formatDate } from "../../utils/Format.jsx";

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded-2xl bg-gray-900 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}                                
        className="poster w-full block"
      />

      <div className="p-2">
        <div className=" flex justify-between items-start ">
          <h2 className="text-lg font-bold leading-snug">
            {movie.title.length > 20 ? movie.title.substring(0, 19) + '...' : movie.title}
         </h2>
        </div>

        {/* <p className="mt-3 min-h-25.5 text-sm text-gray-300">
         {movie.overview.length > 100 ? movie.overview.substring(0, 100) + '...' : movie.overview}
        </p> */}

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded bg-blue-600 px-3 py-1 text-sm">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>

          <span className="text-gray-400">{formatDate(movie.release_date) }</span>
        </div>

        <button className="mt-5 w-full rounded-lg bg-red-600 py-2 font-semibold transition hover:bg-red-700">
             <NavLink to={`${movie.id}`} end>
                Watch Details
            </NavLink>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;