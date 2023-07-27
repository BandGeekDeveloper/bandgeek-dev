"use client";

import React, { useEffect, useState } from "react";
import "../app/styles/homePage.css";
import Navbar from "./Navbar";
import Image from "next/image";

const axios = require("axios");

const HomePage = () => {
  const [quoteData, setQuoteData] = useState(null);

  async function getQuote() {
    const url = "https://api.quotable.io/quotes/random";

    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        setQuoteData(res.data);
      } else {
        console.log(`Failed to fetch data. Status code: ${response.status}`);
      }
    } catch (err) {
      console.log("An error occured:", err.message);
    }
  }

  useEffect(() => {
    getQuote();

    const interval = setInterval(getQuote, 24 * 60 * 60 * 1000);

    return clearInterval(interval);
  }, []);

  //   console.log("API response: ", quoteData[0].author);

  return (
    <div className="home-page">
      <Navbar />
      <div className="img-container">
        <Image
          className="me"
          src="/../public/assets/img/meAiDrawing.jpg"
          width="350"
          height="350"
          alt="an ai drawing of yours truly."
        />
      </div>
      {quoteData ? (
        <div className="quote-text">"{quoteData[0].content}"</div>
      ) : (
        <div className="quote-text">Loading quote...</div>
      )}
      {quoteData && <div className="quote-author">-{quoteData[0].author}</div>}
      <div className="greeting">
        <h1>
          Hi, I'm <span className="my-name">Robin</span>
        </h1>
      </div>
      <div className="home-text">
        <p>
          I am a full stack Web Developer based out of Kentucky and I love
          soccer, basketball, and classical music. Take a look at my portfolio
          and join me in breaking the bounds of the digital space. Let’s build
          something awesome!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
