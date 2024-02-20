"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchMovieDetails } from '../../utils/tmdbAPI';
import Head from 'next/head';
import Link from 'next/link';


function MovieDetailPage() {

  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getMovieDetails = async () => {
      if (id) {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        setLoading(false)
      }
    };

    getMovieDetails();
  }, [id]);



  if (isLoading) return (
    <div className='bg-gray-50/10'>
      Loading ...
    </div>)

    // if no data 
    if (!movie) return (<p className='text-center h-[65vh] text-4xl font-bold mt-12'>No profile data 🤞</p>)
  return (
    <div>
      <Head>
        <title>{movie.title} | BookMySeat</title>
      </Head>
      <div className="flex max-sm:block">
        <div className='w-1/2 max-sm:p-0 p-12 max-sm:w-full max-sm:flex justify-center items-center max-sm:mt-12'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className='w-1/2 h-auto float-right  max-sm:float-none mr-12 max-sm:mr-0 rounded-lg' alt={movie.title} />
        </div>
        <div className='w-1/2 max-sm:w-full max-sm:text-center'>
        <h1 className='mt-32 max-sm:mt-6 text-4xl font-bold tracking-wider mb-3'>{movie.title}</h1>
          <p className='text-lg max-sm:px-5 pr-12'> <span className='text-orange-500 font-bold tracking-wide'>Description:&nbsp;</span>{movie.overview}</p>
          <h2 className='mt-2 text-lg'><span className="text-orange-500 font-bold">Rating:</span> {movie.vote_average}</h2>
          <h2 className='mt-2'><span className="text-orange-500">Release Date :</span> {movie.release_date}</h2>
          <br />
          <button className="px-6 mt-3 py-2 bg-gradient-to-tr from-red-500 to-orange-500 hover:rounded-lg">
            <Link href={`/booking?movie=${movie.title}`}>
              Book Now
            </Link>
          </button>
        </div>
        
      </div>
     
      {/* Other movie details */}
    </div>
  );
}

export default MovieDetailPage;
