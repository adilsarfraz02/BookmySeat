"use client";

import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Booking = () => {
  const handleProceedToTickets = () => {
    // movie name from router
    const movie = router.query.movie;
    router.push(
      `/tickets?selectSeats=${selectedSeats.join(",")}&movie=${movie}`
    );
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Seats | BookMyShow</title>
      </Head>
      <div className="block justify-center">
        <h1 className="text-4xl font-bold text-center pb-5">
          Select Seats below ⬇️
        </h1>
        <div className="w-1/2 h-96 mx-auto mb-4 max-md:w-[95%] bg-black/90 rounded-2xl screen shadow-lg shadow-black">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-red-400 text-5xl font-bold text-center h-96 flex justify-center items-center">
            🎬 Book My Seat Now
          </h1>
        </div>
        <div className="grid mb-12 w-1/2 max-md:w-[90%] max-sm:m-0 max-[1300px]:w-[80%] max-sm:grid-cols-5 max-sm:ml-5 gap-4 mx-auto grid-cols-10 justify-center seats text-center px-5">
          {Array.from({ length: 50 }, (_, index) => (
            <span
              key={index}
              className={`p-2 m-2 cursor-pointer ${
                selectedSeats.includes(index + 1)
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white w-[4rem] rounded-t-3xl "
                  : "bg-black text-white w-[4rem] rounded-t-3xl shadow-xl shadow-black/50"
              }`}
              onClick={() => handleSeatClick(index + 1)}
            >
              Seat {index + 1}
            </span>
          ))}
          <button onClick={handleProceedToTickets}>
            <span className="text-lg bg-gradient-to-r from-red-500 to-orange-500 text-white w-[4rem] rounded-3xl p-4 mt-8">
              Proceed
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
