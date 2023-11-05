import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
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
import { Book } from "./books";

// import CancelIcon from "@mui/icons-material/Cancel"; 


interface BookTableProps {
  books: Book[];
  onAddBook: (newBook: Book) => void;
  booksLength: number;
}

export default function BookTable({
  books,
  onAddBook,
  booksLength,
}: BookTableProps) {
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [editedBooks, setEditedBooks] = useState(books);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    name: "",
    author: "",
    language: "",
    readStatus: "inProgress",
  });

  const handleEditClick = (id: number) => {
    setEditMode(true);
    setEditItemId(id);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    setEditItemId(null);
    setEditedBooks([...editedBooks]);
  };

  const handleSaveNewItemClick = () => {
    onAddBook(newBook);
    setAddMode(false);
  };

  const handleAddClick = () => {
    setNewBook({
      id: booksLength + 1,
      name: "",
      author: "",
      language: "",
      readStatus: "inProgress",
    });
    setAddMode(true);
  };

  useEffect(() => {
    setEditedBooks(books);
  }, [books]);

  const handleInputChange = (event: any, id: number, field: string) => {
    const updatedBooks = editedBooks.map((book) => {
      if (book.id === id) {
        return { ...book, [field]: event.target.value };
      }
      return book;
    });
    setEditedBooks(updatedBooks);

  };

  // const handleCancelClick = () => {
  //   setAddMode(false);
  //   setNewBook({
  //     id: 0,
  //     name: "",
  //     author: "",
  //     language: "",
  //     readStatus: "inProgress",
  //   });
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {editedBooks.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleInputChange(e, row.id, "name")}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.author}
                    onChange={(e) => handleInputChange(e, row.id, "author")}
                  />
                ) : (
                  row.author
                )}
              </TableCell>
              <TableCell>
                {editMode && editItemId === row.id ? (
                  <Input
                    type="text"
                    value={row.language}
                    onChange={(e) => handleInputChange(e, row.id, "language")}
                  />
                ) : (
                  row.language
                )}
              </TableCell>
              <TableCell>
                {editMode ? (
                  <IconButton onClick={handleSaveClick}>
                    <SaveIcon />
                  </IconButton>
                  // <IconButton onClick={handleCancelClick}>
                  //   <CancelIcon />
                  // </IconButton>
                
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
                    value={newBook.name}
                    onChange={(e) =>
                      setNewBook({ ...newBook, name: e.target.value })
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={newBook.author}
                    onChange={(e) =>
                      setNewBook({ ...newBook, author: e.target.value })
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={newBook.language}
                    onChange={(e) =>
                      setNewBook({ ...newBook, language: e.target.value })
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
