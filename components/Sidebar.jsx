'use client'
import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link';
import SearchBar from './SearchBar';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <p className='bg-transparent cursor-pointer text-black' onClick={showDrawer}>
                <CiMenuBurger className='text-2xl my-3' />
            </p>
            <div className='max-sm:block hidden mx-auto' placement="right" onClose={onClose} open={open}>
                <div className="mx-auto w-full my-4 flex items-center justify-center">
                <SearchBar />
                </div>
                <ul className='flex flex-col text-center  list-none gap-2 mt-1'>
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
        </>
    );
};

export default Sidebar;