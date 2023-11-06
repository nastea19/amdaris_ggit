import React from "react";
import "../App.css"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BookTable from "./book-table";
import { addBook, getBooks, updateBook } from "../services/book-service";

export interface Book {
  id: number;
  name: string;
  author: string;
  language: string;
  readStatus: string;
}

export default function Books() {
  const [value, setValue] = React.useState("inProgress");
  const books = getBooks();
  const [booksLength, setLength] = React.useState(books.length);
  const finishedBooks = books.filter((x) => x.readStatus === "finished");
  const inPlanBooks = books.filter((x) => x.readStatus === "inPlan");
  const inProgressBooks = books.filter((x) => x.readStatus === "inProgress");

  const [rowBooks, setBooks] = React.useState<Book[]>(inProgressBooks);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (newValue === "inPlan") {
      setBooks(inPlanBooks);
    } else if (newValue === "finished") {
      setBooks(finishedBooks);
    } else if (newValue === "inProgress") {
      setBooks(inProgressBooks);
    }

    setValue(newValue);
  };

  return (
    <Box
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        fontFamily: "Libre Baskerville, serif",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          // Add margin to create space
          margin: "10px",
          fontFamily: "Libre Baskerville, serif",
        }}
      >
        <Tab value="inProgress" label="In progress" />
        <Tab value="finished" label="Finished" />
        <Tab value="inPlan" label="In plan" />
      </Tabs>

      <BookTable
        books={rowBooks}
        onAddBook={(newBook: Book) => {
          inProgressBooks.push(newBook);
          setLength(booksLength + 1);
          addBook(newBook);
        }}
        booksLength={booksLength}
        onEditBook={(book: Book, bookId: number) => {
          updateBook(bookId, book);
        }}
      />
    </Box>
  );
}
