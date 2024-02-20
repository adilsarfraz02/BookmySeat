'use client'
import { Image } from '@nextui-org/react'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | BookmyShow</title>
      </Head>
      <h1 className='text-center text-6xl font-bold py-5 mt-5 mb-28'></h1>
      <div className='flex mb-[12rem] max-sm:mb-12 mx-12 max-[1200px]:mx-2 max-md:block' >
        <div className='w-1/2 max-md:w-full flex px-6'>
          <Image isZoomed 
            src='https://images.hdqwalls.com/wallpapers/justice-league-2023-art-5b.jpg'
            alt="HouseImage"
            className=" rounded-lg"
          ></Image>
        </div>
        <div className="block text-left py-10 w-1/2 max-md:w-full pl-3">
          <h1 className='text-4xl font-bold font-sans mb-1 text-orange-500'> About Us</h1>
          <p> BOOKmySEAT is a website only made for your comfort. You neither have to worry if tickets are available, nor stand and wait for hours.
            BOOKmySEAT has made it easy for you to book tickets by a single click. It is a platform that offers you to check the movies playing in cinema. It shows you the schedule of movies for a whole week. You can choose your seats, movies and timing. A website to ease your struggles.
          </p>
        </div>

      </div>
      <div className="grid grid-cols-4 max-sm:mb-32 max-sm:mx-2 max-sm:gap-2  mx-20 max-md:mx-3 my-8 max-[1200px]:grid-cols-2 gap-12">
        <div className='h-[200px] rounded-3xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors  border text-center place-content-center grid'>
          <h1 className='text-5xl font-bold'>100+</h1>
          <p className='pt-2 text-xl mr-5'>Movies</p>
        </div>
        <div className='h-[200px] rounded-3xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors  border text-center place-content-center grid'>
          <h1 className='text-5xl font-bold'>165+</h1>
          <p className='pt-2 text-xl mr-5'>shows</p>
        </div>
        <div className='h-[200px] rounded-3xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors  border text-center place-content-center grid'>
          <h1 className='text-5xl font-bold'>463+</h1>
          <p className='pt-2 text-xl mr-5'>Staff members</p>
        </div>
        <div className='h-[200px] rounded-3xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors  border text-center place-content-center grid'>
          <h1 className='text-5xl font-bold'>4063+</h1>
          <p className='pt-2 text-xl mr-5'>Number of Staff</p>
        </div>
      </div>
      <div className=" text-center pt-12 pb-12">
        <h1 className="text-5xl font-bold py-4">
          Who we are<span className='text-orange-600'>?</span>
        </h1>
        <div className="flex justify-between">

          <div className="w-full justify-center pb-14 ">
            <p className="px-32 max-sm:px-6 mt-1">
              Getting a Movies ticket has never been a hassle-free task. Whetheragent to book your ticket in advance or stand in long queues, it was always consuming. BookmySeat, through its e-ticketing system has made these processes quick and easy. Our user-friendly application allows our customers to browse through all available options and book their tickets in a few simple clicks. Bookme.pk is one of the most widely used applications for booking tickets and has been voted the #1 travel and ticketing platform in Pakistan. Apart from bus and air tickets, our platform allows users to book movie tickets, hotels, rent a car, train tickets, event passes, tours, and vacation packages. We have eliminated the need for queue maintenance and brought the facility to book tickets through your devices.              </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default About
