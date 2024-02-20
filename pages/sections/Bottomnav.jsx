"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Bottomnav = () => {
  const [email, setEmail] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fjbb6ke",
        "template_uvo9sam",
        form.current,
        "9m-i2cIAQWf0iMwIB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error During Email Sending..", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };
  return (
    <>
      <div className="flex max-sm:block py-5 pt-8 before:w-full before:h-32  before:absolute before:-mt-32 before:p-0 before:z-10 justify-between max-sm:px-0 bg-white text-black">
        <div className="ml-12 max-sm:ml-0 max-sm:text-center">
          <h1 className="text-2xl">Subscribe to our newsletter</h1>
          <h2 className="text-orange-500">Stay up to date with BookMyShow</h2>
        </div>
        <form
          className="mr-12 max-sm:mr-0 max-sm:flex block max-sm:justify-center max-sm:items-center text-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            autoComplete="true"
            name="to_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white py-3 text-black shadow-lg shadow-black/15 border-2 hover:border-orange-500 focus:border-orange-500 transition-all duration-300 ease-in-out  border-gray-500/5 focus:outline-orange-500 px-7 mr-2 rounded-lg"
            placeholder="Enter Your Email"
          />
          <input
            type="submit"
            value="Subscribe"
            className="hover:text-white transition-all ease-in-out shadow-lg max-sm:mt-3 cursor-pointer bg-gradient-to-tr from-orange-600 to-red-400 px-4 py-3 rounded-2xl autofill:bg-yellow-500/20"
          />
        </form>
      </div>
    </>
  );
};

export default Bottomnav;
