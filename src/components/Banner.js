import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "../styles.css";

function Banner() {
  const [movies, setMovies] = useState({});
  const [innerheight, setInnerHeight] = useState(false);

  useEffect(() => {
    axios.get(`${requests.fetchNetflixOrignals}`).then((res) => {
      setMovies(
        res.data.results[
          Math.floor(Math.random() * (res.data.results.length - 1))
        ]
      );
    });
  }, []);

  function handler() {
    // console.log(window.scrollY);
    setInnerHeight(window.scrollY >= 100 ? true : false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [innerheight]);

  console.log(movies);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n) : str;
  }

  return (
    //   header for background image
    //  title
    // div for buttons
    //discription
    <header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div
        className="nav"
        style={{
          background: innerheight ? "black" : "transparent"
        }}
      >
        <div className="nav-items">
          <img
            alt="logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            className="logo"
          ></img>
          <img
            alt="logo"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            className="logo"
          ></img>
        </div>
      </div>
      {/* navbar  */}
      {/* show with transition when 100px scroll... */}

      <div className="banner-contents">
        <h1 className="banner-title">{movies.name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">play</button>
          <button className="banner-button">mylist</button>
        </div>
        <h1 className="desc">{truncate(movies.overview, 100)}</h1>
      </div>
      <div className="banner-bottom"></div>
    </header>
  );
}

export default Banner;
