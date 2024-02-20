"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { searchMovies } from "../utils/tmdbAPI";
import Link from "next/link";

function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getSearchResults = async () => {
      if (q) {
        const results = await searchMovies(q);
        setSearchResults(results);
        setLoading(false);
      } else {
        setSearchResults([]);
      }
    };

    getSearchResults();
  }, [q]);
  if (loading) {
    return <h1 className="text-2xl text-center text-black">Loading...</h1>;
  } else {
    return (
      <div className="">
        <h1 className="text-2xl p-5 text-orange-500">
          Search Results for "<span className="">{q}</span>"
        </h1>
        <div className="grid max-md:grid-cols-2 max-[1300px]:grid-cols-4 max-sm:grid-cols-1 grid-cols-6 px-12 gap-2 ">
          {searchResults.map((movie) => (
            <div key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <img
                  className="rounded-2xl bg-gray-600"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Not found !"
                />
                <span className="mt-3">{movie.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
