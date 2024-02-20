"use client";

import TopNav from "../components/TopNav";
import "antd/dist/reset.css";
import "../public/css/style.css";
import Footerb from "../components/Footerb";
// import { AOSInit } from "./aos";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import Banner from "../components/Banner";
import { ToastContainer, toast } from "react-toastify";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <ToastContainer />
      {/* <AOSInit /> */}
      <Banner />
      <TopNav data-aos="fade" />
      <Component {...pageProps} />
      <Footerb />
    </>
  );
}
