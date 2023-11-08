import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  IconButton,
  Input,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../App.css";
import { Book } from "./books";

interface BookTableProps {
  books: Book[];
  onAddBook: (newBook: Book) => void;
  booksLength: number;
  onEditBook: (book: Book, bookId: number) => void;
}

export default function BookTable({
  books,
  onAddBook,
  booksLength,
  onEditBook,
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

  const handleSaveClick = (row: Book) => {
    setEditMode(false);
    setEditItemId(null);
    setEditedBooks([...editedBooks]);
    onEditBook(row, row.id);
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

  const handleCancelClick = () => {
    setAddMode(false);
    setEditMode(false);
    setEditedBooks(books);
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
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Language</TableCell>
            {!addMode ? <TableCell>Read Status</TableCell> : undefined}
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
                {editMode && editItemId === row.id ? (
                  <Select
                    value={row.readStatus}
                    onChange={(e) => handleInputChange(e, row.id, "readStatus")}
                  >
                    <MenuItem value="inProgress">In Progress</MenuItem>
                    <MenuItem value="finished">Finished</MenuItem>
                    <MenuItem value="inPlan">In Plan</MenuItem>
                  </Select>
                ) : (
                  row.readStatus
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
