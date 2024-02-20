import Link from 'next/link'
import SearchBar from '../components/SearchBar';
import Sidebar from './Sidebar';

const TopNav = () => {
  return (
    <div className='px-12 py-7 max-sm:px-2 w-full z-10 flex justify-between backdrop-blur-xl bg-white/100 border-b-2 border-gray-50/5'>
      <h1 className="logo  text-3xl mt-2 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-red-400 font-bold tracking-wide">
        <Link href='/'>BOOKmySEAT
        </Link>
      </h1>
      <div className='max-md:hidden
      '>
        <ul className='flex list-none gap-2 mt-1 max-lg:hidden'>
          <li className='hover:text-black text-white cursor-pointer px-6 py-3 mt-1  bg-gradient-to-tr from-orange-600 to-red-400 rounded-full'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-black cursor-pointer text-white px-6 py-3 mt-1  bg-gradient-to-tr from-orange-600 to-red-400 rounded-full'>
            <Link href='/movies'>Movies</Link>
          </li>
          <li className='hover:text-black cursor-pointer text-white px-6 py-3 mt-1 bg-gradient-to-tr from-orange-600 to-red-400 rounded-full'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='hover:text-black cursor-pointer text-white px-6 py-3 mt-1  bg-gradient-to-tr from-orange-600 to-red-400 rounded-full'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div className="mt-1 mr-5 max-sm:hidden">
        <SearchBar />
      </div>
      <div className="max-sm:block hidden">
        <Sidebar />
      </div>
    </div>
  )
}

export default TopNav
