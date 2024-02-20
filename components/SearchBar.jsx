// components/SearchBar.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi'


function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery} className='px-3 py-2 shadow-sm shadow-black/40  bg-white rounded-l-xl text-black outline-none border-none'
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit" className=' bg-gradient-to-tr from-orange-600 to-red-400 py-2 absolute px-3 rounded-r-xl'>
      <FiSearch size={24} color='#fff'></FiSearch>
      </button>
     
    </form>
  );
}

export default SearchBar;
