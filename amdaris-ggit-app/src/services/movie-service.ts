import { Movie } from "../components/movies";

const MOVIES_STORAGE_KEY = "movies";

export const getMovies = (): Movie[] => {
  const storedData = localStorage.getItem(MOVIES_STORAGE_KEY);
  if (storedData) {
    return JSON.parse(storedData) as Movie[];
  }
  return [];
};

export const saveMovies = (movies: Movie[]): void => {
  localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(movies));
};

export const addMovie = (newMovie: Movie): void => {
  const existingMovies = getMovies();
  const updatedMovies = [...existingMovies, newMovie]
  saveMovies(updatedMovies)
}

export const updateMovie = (movieId: number, updatedBook: Movie): void => {
  const existingMovies = getMovies();
  const updatedMovies = existingMovies.map((movie) => {
    if (movie.id === movieId) {
      return { ...movie, ...updatedBook };
    }
    return movie;
  });
  saveMovies(updatedMovies);
};

export const deleteMovie = (movieId: number): void => {
  const existingMovies = getMovies();
  const updatedMovies = existingMovies.filter((movie) => movie.id !== movieId);
  saveMovies(updatedMovies)
}

export const updateMovieStatus = (movieId: number, watchStatus: string): void => {
  const existingMovies = getMovies();
  const updatedMovies = existingMovies.map((movie) => {
    if (movie.id === movieId) {
      return {...movie, watchStatus};
    }
    return movie;
  });
  saveMovies(updatedMovies);
}