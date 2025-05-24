import React, { useState } from 'react';

function NavBar() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <nav className="relative flex flex-wrap justify-between items-center p-4 bg-black">
      <div className="flex gap-4 text-sm md:text-lg uppercase">
        <a href="#" className="hover:opacity-70">Fashion</a>
        <a href="#" className="hover:opacity-70">Casa</a>
        <a href="#" className="hover:opacity-70">Beauty</a>
        <a href="#" className="hover:opacity-70">Food & Beverages</a>
        <a href="#" className="hover:opacity-70">World</a>
        <a href="#" className="hover:opacity-70">Sustainability</a>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="text-white uppercase text-xs md:text-sm"
          onClick={() => setSearchActive(!searchActive)}
        >
          Search
        </button>
        {searchActive && (
          <input
            type="text"
            placeholder="Search this website"
            className="bg-black border border-white text-white p-2 text-xs md:text-sm"
          />
        )}
        <button
          className="text-white uppercase text-xs md:text-sm"
          onClick={() => alert('Redirecting to login page...')}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
