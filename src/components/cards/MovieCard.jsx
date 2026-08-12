import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded-2xl bg-gray-900 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}                                
        className="h-96 w-full object-cover"
      />

      <div className="p-2">
        <div className="min-h-[56px] flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold leading-snug">
            {movie.title.length > 30 ? movie.title.substring(0, 30) + '...' : movie.title}
         </h2>

          <span className="hrink-0 rounded bg-yellow-400 px-2 py-1 text-black">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
           
        </div>

        <p className="mt-3 min-h-[102px] text-sm text-gray-300">
         {movie.overview.length > 100 ? movie.overview.substring(0, 100) + '...' : movie.overview}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded bg-blue-600 px-3 py-1 text-sm">
            Sci-Fi
          </span>

          <span className="text-gray-400">2010</span>
        </div>

        <button className="mt-5 w-full rounded-lg bg-red-600 py-2 font-semibold transition hover:bg-red-700">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default MovieCard;