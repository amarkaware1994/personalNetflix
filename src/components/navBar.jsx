import React from 'react'
import { Link ,NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[#141414] border-b border-gray-800 shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link  to="/personalNetflix" className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold tracking-wider text-[#E50914]">
            NETFLIX
          </h1>
        </Link>

        
          {/* Search Box */}
           <div className="relative flex-1 mx-8">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search movies..."
            className="w-full rounded-full border border-gray-700 bg-[#1f1f1f] py-2.5 pl-11 pr-4 text-white placeholder-gray-400 outline-none transition focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]"
          />
        </div>
       

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-300">
          <NavLink
            to="/personalNetflix" end
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >Home</NavLink>

          <NavLink
            to="/personalNetflix/top-rated" end
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >Top Rated Movies</NavLink>
          {/* <Link
            to="/personalNetflix"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="transition hover:text-white"
          >
            Movies
          </Link>

          <Link
            to="/favorites"
            className="transition hover:text-white"
          >
            Favorites
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar
