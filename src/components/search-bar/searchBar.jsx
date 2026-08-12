import React from 'react'
import './serachBar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" className="border-gray-400 border-2 rounded-full p-1 px-4 w-full"
       placeholder="Search for a movie, tv show, person......">
      </input>
    </div>
  )
}

export default SearchBar
