import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../styles.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isPosterLarge }) {
  let [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    axios
      .get(`${fetchUrl}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  function handleClick(movie) {
    if (trailerUrl) {
      console.log("if executed");
      setTrailerUrl(null);
    } else {
      console.log("else executed..");
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((res) => {
          const url = new URL(res).searchParams.get("v");
          console.log(url);
          setTrailerUrl(url);
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="posters">
        {movies.map((element, key) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original${
                isPosterLarge ? element.poster_path : element.backdrop_path
              }`}
              alt={element?.name || element?.original_name || ""}
              //   className={isPosterLarge ? "poster poster-large" : "poster"}
              className={`poster ${isPosterLarge && "poster-large"}`}
              onClick={() => {
                handleClick(element);
              }}
              key={key}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

// axios.get(`/${fetchUrl}`).then(res=>setMovies([res.data.results]).catch(err=>console.log(err));
// console.log(movies);
