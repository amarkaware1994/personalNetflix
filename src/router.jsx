import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import MovieDetails from './components/pages/movie-details.jsx'
import TopRatedMovies from './components/tending-video/TopratedMovies.jsx'
import Layout from './Layout.jsx';

export const router = createBrowserRouter([
  {
    path: "/personalNetflix",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <App /> 
      }, 
      {
        path:"top-rated",
        element: <TopRatedMovies />,
      },
      {
        path: `:id`,
        element: <MovieDetails />,      
      }
    ]

  },
  {path: "*",element: <div>Page Not Found</div>,},
]);
