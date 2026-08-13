import React from 'react'
import { useParams,useNavigate } from "react-router-dom";
import { useEffect ,useState } from 'react';
import {
  FaStar,
  FaPlay,
  FaHeart,
  FaShareAlt,
  FaClock,
  FaCalendarAlt,FaArrowLeft,
} from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { formatCurrency,formatDate,formatRuntime } from "../../utils/Format.jsx";


const apiToken = import.meta.env.VITE_TMDB_READ_API_TOKEN;
const MovieDetails = () => {
     const navigate = useNavigate();
    const { id } = useParams();
    const [movieDetails, setMovieDetails] =useState({});
    const [castList, setCastList] =useState([]);
    const { title, overview, release_date, runtime, genres, 
        vote_average, poster_path,backdrop_path,spoken_languages,status,revenue,budget ,production_companies} = movieDetails;

    useEffect(() => {
        console.log("MovieDetails useEffect called with id: " + id);
        getMovieDetails();
        getCreditsByMovieId();
    }, [id]);


    function getMovieDetails() {
        console.log("getMovieDetails called");
        
        console.log("apiToken"  + apiToken);
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=en-US';
        const options = {
                        method: 'GET',
                        headers: {accept: 'application/json', Authorization: 'Bearer ' + apiToken},
                        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {console.log(json); setMovieDetails(json);})
            .catch(err => console.error(err));
    }   

     function getCreditsByMovieId() {
        console.log("getCreditsByMovieId called");
        const url = 'https://api.themoviedb.org/3/movie/' + id + '/credits?language=en-US';
        const options = {
                        method: 'GET',
                        headers: {accept: 'application/json', Authorization: 'Bearer ' + apiToken},
                        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {console.log(json); setCastList(json.cast);})
            .catch(err => console.error(err));
    }   
 return (
    <div className="min-h-screen bg-[#0B1120] text-white">
        {/* <button
            onClick={() => navigate(-1)}
            className="fixed left-6 top-6 z-50 flex items-center gap-3 rounded-full bg-black/60 px-5 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
            <FaArrowLeft className="text-lg" />
            <span className="font-medium">Back</span>
        </button> */}

         <button
            onClick={() => navigate(-1)}
            className="fixed top-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-110"
            >
            <IoArrowUndo size={24} />
        </button>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src={backdrop_path ? `https://image.tmdb.org/t/p/w1280${backdrop_path}` : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600"}
          alt="Movie Banner"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-6 lg:flex-row lg:items-end">
          {/* Poster */}
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/w1280${poster_path}` : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"}
            alt="Poster"
            className="h-80 w-56 rounded-xl object-cover shadow-2xl"
          />

          {/* Movie Info */}
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold">
              {title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-gray-300">
              <span className="flex items-center gap-2 text-yellow-400">
                <FaStar />
                {vote_average?vote_average.toFixed(1) : 'N/A'}/ 10
              </span>

              <span className="flex items-center gap-2">
                <FaCalendarAlt />
                {release_date}
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                {formatRuntime(runtime)}
              </span>

            {genres?.map((genre) => (
              <span key={genre.id} className="rounded bg-blue-600 px-3 py-1 text-sm">
                {genre.name}
              </span>
            ))}
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              {overview}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
                <FaPlay />
                Watch Now
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 hover:bg-gray-800">
                <FaHeart />
                Favorite
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 hover:bg-gray-800">
                <FaShareAlt />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl bg-[#111827] p-6">
              <h2 className="mb-4 text-2xl font-bold text-blue-400">
                Storyline
              </h2>

              <p className="leading-8 text-gray-300">
                {overview}
              </p>
            </div>

            <div className="rounded-xl bg-[#111827] p-6">
              <h2 className="mb-4 text-2xl font-bold text-blue-400">
                Cast
              </h2>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {castList?.slice(0, 6).map((actor) => (
                   <div
                        key={actor.id}
                        className="group rounded-xl bg-[#1A2333] p-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#24324A]"
                    >
                        <img
                        src= {actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=400"}
                        alt="Actor"
                        className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-blue-500 transition group-hover:ring-blue-400"
                        />

                        <h3 className="mt-4 truncate font-semibold text-white">
                        {actor.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                        {actor.character}
                        </p>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-xl bg-[#111827] p-6">
              <h2 className="mb-4 text-xl font-bold text-blue-400">
                Movie Info
              </h2>

              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Release Date</span>
                  <span>{formatDate(release_date) || 'N/A'}</span>
                </div>

                <div className="flex justify-between">
                  <span>Language</span>
                  <span>{spoken_languages?.[0]?.name || 'N/A'}</span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>
                  <span>{status || 'N/A'}</span>
                </div>

                <div className="flex justify-between">
                  <span>Budget</span>
                  <span>{budget ? `$${formatCurrency(budget)}` : 'N/A'}</span>
                </div>

                <div className="flex justify-between">
                  <span>Revenue</span>
                  <span>{revenue ? `$${formatCurrency(revenue)}` : 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#111827] p-6">
              <h2 className="mb-4 text-xl font-bold text-blue-400">
                Production
              </h2>

              <div className="space-y-3 text-gray-300">
                {production_companies?.map((company) => (
                  <p key={company.id}>{company.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails