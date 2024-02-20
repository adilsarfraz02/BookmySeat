"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link'


const Popularmovie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {

    async function fetchMovies() {
      try {
        const response = await fetch('/api/moviesData');
        const data = await response.json();
        setMovies(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);


  if (isLoading) return (
    <div className='bg-gray-50/10'>
      
    </div>)
    if (!movies) return (<p className='text-center h-[65vh] text-4xl font-bold mt-12'>No profile data 🤞</p>)
    
    

  return (
    <div className='mx-6 max-md:mx-0 mt-24 ' >
      <div className="flex max-sm:px-2 items-center justify-between mb-4">
      <h1 className='text-4xl max-sm:text-2xl dark:text-[#bbb] text-black font-bold border-l-8 border-orange-600'>&nbsp;Popular Movies</h1>
      <p className='text-orange-600 text-xl mt-3 max-sm:m-0 font-bold hover:text-orange-800 cursor-pointer'>
        <Link href="/movies" > Show all
        </Link>
      </p>
      </div>
     {/* grid */}
     <div className='grid max-sm:grid-cols-1 max-sm:mt-12 max-[1200px]:grid-cols-3 grid-cols-4 gap-4 mx-20'>
        {movies.map(movie => (
          <div>
                <Link href={`/movies/${movie.id}`}>
                  <span className='absolute px-4 bg-gradient-to-tr from-orange-600 to-red-500 font-bold rounded-full m-2 mb-3'>{movie.vote_average}</span>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className=' rounded-xl' alt={movie.title} />
               
                <div className='py-5 max-sm:pt-2'  key={movie.id}>
                <h1 className='
              font-bold text-2xl  text-orange-500'>{movie?.title}</h1></div>
                 </Link>
          </div>
        ))}
       
      </div>
    </div>
  )
}

export default Popularmovie
