import './App.css'
import NavBar from './components/navBar'
import SearchBar from './components/search-bar/searchBar'
import TrendinMovies from './components/tending-video/TrendinVideo';
import { Outlet } from "react-router-dom";


function App() {


  return (
    <>
      <TrendinMovies/>
    </>
  )
}

export default App
