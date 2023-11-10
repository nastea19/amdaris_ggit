import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { addMovie, getMovies } from "../services/movie-service";
import MovieTable from "./movie-table";

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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
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
      />
    </Box>
  );
}
