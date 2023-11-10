import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Input,
} from "@mui/material";
import { Movie } from "./movies";
import "../App.css";

interface MovieTableProps {
  movies: Movie[];
  onAddMovie: (newMovie: Movie) => void;
  moviesLength: number;
  onEditMovie: (movie: Movie, movieId: number) => void;
}

export default function MovieTable({
  movies,
  onAddMovie,
  moviesLength,
  onEditMovie,
}: MovieTableProps) {
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [editedMovies, setEditedMovies] = useState(movies);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [newMovie, setNewMovie] = useState<Movie>({
    id: 0,
    title: "",
    genre: "",
    country: "",
    length: "",
    watchStatus: "watching",
  });

  const handleEditClick = (id: number) => {
    setEditMode(true);
    setEditItemId(id);
  };

  const handleSaveClick = (row: Movie) => {
    setEditMode(false);
    setEditItemId(null);
    setEditedMovies([...editedMovies]);
    onEditMovie(row, row.id);
  };

  const handleSaveNewItemClick = () => {
    onAddMovie(newMovie);
    setAddMode(false);
  };

  const handleAddClick = () => {
    setNewMovie({
      id: moviesLength + 1,
      title: "",
      genre: "",
      country: "",
      length: "",
      watchStatus: "watching",
    });
    setAddMode(true);
  };

  useEffect(() => {
    setEditedMovies(movies);
  }, [movies]);

  const handleInputChange = (event: any, id: number, field: string) => {
    const updatedMovies = editedMovies.map((movie) => {
      if (movie.id === id) {
        return {...movie, [field]: event.target.value };
      }
      return movie;
    });
    setEditedMovies(updatedMovies);
  };

const handleCancelClick = () => {
  setAddMode(false);
  setEditMode(false);
  setEditedMovies(movies);
};

  return (

    <TableContainer component={Paper}> 
      <Table 
        sx={{
          minWidth: 700,
          fontFamily: "Libre Baskerville, serif",
        }}
        aria-label="customized table"
        className="books-table"
      >
        <TableHead>
          <TableRow
            sx={{
              fontFamily: "Libre Baskerville, serif",
              fontWeight: "bold",
            }}
          >
            <TableCell>Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Episodes</TableCell>
            {!addMode ? <TableCell>Watch Status</TableCell> : undefined}
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {editedMovies.map((row) => (
            <TableRow key = {row.id}>
              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.title}
                    onChange={(e) => handleInputChange(e, row.id, "title")}
                  />
                ): (
                  row.title
                )}
              </TableCell>

              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.genre}
                    onChange={(e) => handleInputChange(e, row.id, "genre")}
                  />
                ) : (
                  row.genre
                )}
              </TableCell>

              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.country}
                    onChange={(e) => handleInputChange(e, row.id, "country")}
                  />
                ) : (
                  row.country
                )}
              </TableCell>

              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.length}
                    onChange={(e) => handleInputChange(e, row.id, "length")}
                  />
                ) : (
                  row.length
                )}
              </TableCell>

              <TableCell>
                {editMode && editItemId === row.id ? (
                  <>
                    <IconButton onClick={() => handleSaveClick(row)}>
                      <SaveIcon />
                    </IconButton>

                    <IconButton onClick={handleCancelClick}>
                      <CancelIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton onClick={() => handleEditClick(row.id)}>
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            {addMode ? (
              <>
                <TableCell>
                  <Input 
                    type="text"
                    value={newMovie.title}
                    onChange={(e) => 
                      setNewMovie({...newMovie, title: e.target.value})
                    }
                  />
                </TableCell>

                <TableCell>
                  <Input 
                    type="text"
                    value={newMovie.genre}
                    onChange={(e) => 
                      setNewMovie({...newMovie, genre: e.target.value})
                    }
                  />
                </TableCell>

                <TableCell>
                  <Input 
                    type="text"
                    value={newMovie.country}
                    onChange={(e) => 
                      setNewMovie({...newMovie, country: e.target.value})
                    }
                  />
                </TableCell>

                <TableCell>
                  <Input 
                    type="text"
                    value={newMovie.length}
                    onChange={(e) => 
                      setNewMovie({...newMovie, length: e.target.value})
                    }
                  />
                </TableCell>
                <IconButton onClick={handleSaveNewItemClick}>
                  <SaveIcon />
                </IconButton>
              </>
            ) : (
              <TableCell>
                <IconButton onClick={handleAddClick}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}