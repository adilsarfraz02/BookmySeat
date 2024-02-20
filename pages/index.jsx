"use client";

import React from "react";
import Carousel from "../components/Slide";
import Popularmovie from "./sections/Popularmovie";
import Head from "next/head";
import NewRelease from "./sections/NewRelease";
import BottomNav from "./sections/Bottomnav";

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>BOOKmySEAT | Book Your Movies Ticket Now!</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Carousel />
      <Popularmovie />
      <NewRelease />
      <BottomNav />
    </div>
  );
};

export default Index;
