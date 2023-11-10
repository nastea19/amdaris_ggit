import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { addMovie, getMovies, updateMovie } from "../services/movie-service";
import MovieTable from "./movie-table";
import MovieCard from "./movie-card";
import "../App.css"

export interface Movie {
  id: number;
  title: string;
  genre: string;
  length: string;
  country: string;
  watchStatus: string;
}

export default function Movies() {
  const [value, setValue] = React.useState("watching");
  const movies = getMovies();
  const [moviesLength, setLength] = React.useState(movies.length);
  const watchedMovies = movies.filter((x) => x.watchStatus === "watched");
  const toWatchMovies = movies.filter((x) => x.watchStatus === "to watch");
  const watchingMovies = movies.filter((x) => x.watchStatus === "watching");

  const [rowMovies, setMovies] = React.useState<Movie[]>(watchingMovies);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (newValue === "to watch") {
      setMovies(toWatchMovies);
    } else if (newValue === "watched") {
      setMovies(watchedMovies);
    } else if (newValue === "watching") {
      setMovies(watchingMovies);
    }

    setValue(newValue);
  };

  return (
    <Box>

<div className="bookcard">
        <div className="bookcardspacing">
          <MovieCard
            title="Hidden Love (2023)"
            subheader="Genres: Comedy, Romance"
            image="https://m.media-amazon.com/images/M/MV5BZTUxZDI1YWYtNTY2YS00MWY1LWJjY2EtN2E4ODQ0YTBkNDY3XkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_.jpg"
            alt="Hidden Love"
            description="Sang Zhi falls in love with Duan Jia Xu, a boy who often comes to her house to play games in her older brother’s room. He is seven years older than her. Sang Zhi had a crush on Duan Jia Xu when she was young, but they lost contact with each other for some reason. After she graduates, she joins the university in the city he is in, and during their day-to-day intimate and close interaction, they slowly fall in love.
            ~~ Adapted from the web novel “Secretly, Secretly; But Unable to Hide It” (偷偷藏不住) by Zhu Yi (竹已)"
          />
        </div>

        <div className="bookcardspacing">
          <MovieCard
            title="My Name (2021)"
            subheader="Genres: Action, Drama, Adventure"
            image="https://i0.wp.com/www.korseries.com/wp-content/uploads/2021/09/My-Name-Teaser-Poster-EN-691x1024.jpeg?resize=691%2C1024&ssl=1"
            alt="My Name"
            description="Yoon Ji-Woo’s (Han So-Hee) father dies suddenly. She wants to desperately take revenge on whoever is responsible for her father's death. Yoon Ji-Woo works for drug crime group Dongcheonpa.Choi Mu-Jin (Park Hee-Soon) is the boss of the drug gang. With the help of Choi Mu-Jin and to uncover the reason for her father's death, Yoon Ji-Woo joins the police department and becomes a mole for the drug group. Yoon Ji-Woo is assigned to work in the drug investigation unit in the police department. Her partner there is Detective Jeon Pil-Do (Ahn Bo-Hyun)."
          />
        </div>

        <div className="bookcardspacing">
          <MovieCard
            title="Friends (1994–2004) "
            subheader="Genres: Comedy"
            image="https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
            alt="Friends"
            description="This is a show about love and sex and careers and a time in life when everything is possible ... about the search for commitment and security ... and the fear of commitment and security. Most of all, it's about friendship--for when you're young and single in the city, your friends are your family."
          />
        </div>

        <div className="bookcardspacing">
          <MovieCard
            title="Kukhnya/The Kitchen (2012–2016)"
            subheader="Genres: Comedy"
            image="https://static.kinoafisha.info/k/series_posters/480/upload/series/posters/4/8/0/1084/463213111595442641.jpg"
            alt="Kukhnya/The Kitchen"
            description="Maksim `Max` Lavrov wants to become a great chef. But he finds out that the kitchen isn't the place for an easy career. And in restaurant `Claude Monet` this job looks even harder and much more complicated than just cooking."
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          margin: "10px",
          fontFamily: "Libre Baskerville, serif",
        }}
      >
        <Tab value="to watch" label="I want to Watch" />
        <Tab value="watching" label="I'm watching" />
        <Tab value="watched" label="I watched" />
      </Tabs>

      <MovieTable
        movies={rowMovies}
        onAddMovie={(newMovie: Movie) => {
          watchingMovies.push(newMovie);
          setLength(moviesLength + 1);
          addMovie(newMovie);
        }}
        moviesLength={moviesLength}
        onEditMovie={(movie: Movie, movieId: number) => {
          updateMovie(movieId, movie);
        }}
      />
    </Box>
  );
}
