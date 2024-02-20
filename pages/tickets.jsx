"use client";
  
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GiSofa } from "react-icons/gi";

const tickets = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  // Ensure two digits for day and month
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  const router = useRouter();
  const selectedSeats = router.query.selectSeats || `Selected a seat`;
  const movietitle = router.query.movie || "";
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000) + 1;
    setRandomNumber(random);
  }, []);

  useEffect(() => {
    if (!movietitle) {
      router.push("/movies");
    }
  }, [movietitle]);

  if (!movietitle) {
    return (
      <>
        <h1 className="text-center text-4xl font-bold">
          Please Choose Movies ....
        </h1>
      </>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Ticket | BookMySeat</title>
        </Head>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-3xl font-bold mb-2">Ticket Information</h2>
          <h2 className="text-xl">
            <span className="font-bold text-orange-500">Movie Name: </span>
            {movietitle}
          </h2>
          <p className="text-lg">
            <span className="font-bold text-orange-500"> Your Seats: </span>
            {selectedSeats}
          </p>
          <div
            className="w-[90%] mx-16 h-96 mt-5 flex ticket"
            id="print-content"
          >
            <div className="w-1/3 h-full bg-gray-200 overflow-hidden rounded-r-[92px] border-r-2 border-dashed  border-black">
              <h1 className="mt-20 p-5 bg-blue-900 text-center text-white text-3xl">
                No. {randomNumber}
              </h1>
              <h1 className="text-center border-4 rounded-full w-20 h-20 mt-5 border-black mx-auto">
                <GiSofa className="text-6xl ml-[.4rem] mt-2 text-center" />
              </h1>
              <h2 className="text-center mt-2 text-2xl">
                Seats :{selectedSeats}
              </h2>
              <h2 className="ml-2 text-xl text-center">{formattedDate}</h2>
            </div>
            <div className="w-3/4 h-full bg-gray-200 rounded-l-[92px] overflow-hidden border-l-2 border-dashed  border-black">
              <h1 className="mt-20 p-5 bg-orange-900 text-white text-right text-3xl font-bold tracking-wider">
                Movie Ticket
              </h1>
              <div className="ml-12">
                <h1 className="text-4xl mt-6 font-bold ml-2">{movietitle}</h1>
                <h2 className="my-4 text-xl">NO. {randomNumber}</h2>
                <h2 className="my-4 text-xl">
                  <span className="text-blue-500 font-bold">Date :</span>{" "}
                  {formattedDate}
                </h2>
              </div>
              <div className="relative">
                <h2 className="text-left text-4xl mr-5  absolute right-2 bottom-4">
                  Seats :{selectedSeats}
                </h2>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-600  focus:shadow-outline shadow-blue-600 text-white mt-4 px-4 py-2 rounded-lg"
            onClick={() => {
              window.print();
            }}
          >
            Save Ticket
          </button>
        </div>
      </div>
    );
  }
};

export default tickets;
