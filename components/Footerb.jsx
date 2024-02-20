import React from 'react'
import Link from 'next/link'
import { AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
const Footerb = () => {
  return (
    <footer className=' border-t-2 px-2 border-gray-50/5 dark:bg-white dark:text-black '>
      <div className="flex max-sm:block max-sm:text-center px-9 py-5 justify-between border-t-2 border-gray-50/5">
      <h1 className="logo text-3xl mt-2 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-red-400 font-bold tracking-wide">
        <Link href='/'>BOOKmySEAT
        </Link>
      </h1>
      <ul className="flex items-center justify-center list-none gap-4 mt-4">
        <li>
          <a href="" target='_blank'>
          <BsFacebook className='text-[26px] hover:text-orange-500'/>
          </a>
        </li>
        <li>
        <a href="" target='_blank'>
            <AiFillInstagram className='text-[30px] hover:text-orange-500'/>
          </a>
        </li>
        <li>
        <a href="" target='_blank'>
          <AiFillTwitterCircle className='text-[30px] hover:text-orange-500'/>
        </a>
        </li>
      </ul>
      </div>
    </footer>
  )
}

export default Footerb
