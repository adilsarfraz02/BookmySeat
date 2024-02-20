"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const YOUR_SERVICE_ID = "service_5gthpzo";
const YOUR_TEMPLATE_ID = "template_n957vtn";
const YOUR_PUBLIC_KEY = "9m-i2cIAQWf0iMwIB";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks,We Contact You Soon 😊");
        },
        (error) => {
          console.log(error.text);
          toast.error("!Error Sorry Try again");
        }
      );
  };

  return (
    <>
      <Head>
        <title>Contact Us | BZmovies </title>
      </Head>
      <h1 className="text-6xl pt-14 selection:bg-pink-600 font-bold mb-4 text-center">
        Contact Us
      </h1>
      <div className="max-w-md mx-auto h-[389px]">
        <form onSubmit={sendEmail} ref={form}>
          <div className="mb-4">
            <label htmlFor="name *" className="block mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="to_name"
              className="w-full px-4 py-2 border border-gray-300 hover:border-orange-500 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email *" className="block mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="to_email"
              className="w-full px-4 py-2  border border-gray-300 hover:border-orange-500 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="to_message"
              className="w-full px-4 py-2 border border-gray-300 rounded-full  hover:border-orange-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-gradient-to-tr from-orange-600 to-red-400 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
