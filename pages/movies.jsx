"use client";

import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { fetchPopularMovies } from "../utils/tmdbAPI";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
      setLoading(false);
    };

    getMovies();
  }, []);

  if (isLoading)
    return (
      <>
      Loading ............
      </>
    );
  if (!movies)
    return (
      <p className="text-center h-[65vh] text-4xl font-bold mt-12">
        No profile data 🤞
      </p>
    );

  return (
    <div className="bg-white text-black">
      <Head>
        <title>Movies | BookmySeat</title>
      </Head>
      <h1 className="text-5xl font-bold text-center pt-12">Top Movies</h1>
      <span className="block w-20 rounded-xl h-2 bg-orange-500 mx-auto mt-2  mb-12"></span>
      <div className="grid max-sm:grid-cols-1 max-[1200px]:grid-cols-3 grid-cols-4 gap-4 mx-20">
        {movies.map((movie) => (
          <div>
            <Link href={`/movies/${movie.id}`}>
              <span className="absolute px-4 bg-gradient-to-tr from-orange-600 to-red-500 font-bold rounded-full m-2 mb-3">
                {movie.vote_average}
              </span>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="bg-gray-500 h-[30rem] rounded-xl"
                alt={movie.title}
              />

              <div className="py-5" key={movie.id}>
                <h1
                  className="
                font-bold text-2xl  text-orange-500"
                >
                  {movie?.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="text-center px-4 py-2 rounded-sm hover:rounded-xl bg-gradient-to-t from-orange-500 to-red-500   grid  mx-auto ">
        Load More
      </button>
      <br />
    </div>
  );
};

export default Movies;
