import React from "react";
import "../App.css"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BookTable from "./book-table";
import { addBook, getBooks, updateBook } from "../services/book-service";
import BookCard from "./book-card";
import rwrb from "/images/rwrb.jpeg";

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
    <Box>
      <h2 className="h2">Trending romance books:</h2>
      <div className="bookcard">
        <div className="bookcardspacing">
          <BookCard
            title="It Ends with Us"
            subheader="Colleen Hoover, 2016"
            image="amdaris-ggit-app/src/images/itendswithus.jpeg"
            alt="It Ends with Us"
            description="Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true."
          />
        </div>

        <div className="bookcardspacing">
          <BookCard
            title="Red, White & Royal Blue"
            subheader="Casey McQuisto, 2019"
            image="/images/rwrb.jpeg"
            alt="Red, White & Royal Blue"
            description="First Son Alex Claremont-Diaz is the closest thing to a prince this side of the Atlantic. With his intrepid sister and the Veep's genius granddaughter, they're the White House Trio, a beautiful millennial marketing strategy for his mother, President Ellen Claremont. International socialite duties do have downsides—namely, when photos of a confrontation with his longtime nemesis Prince Henry at a royal wedding leak to the tabloids and threaten American/British relations. The plan for damage control: staging a fake friendship between the First Son and the Prince."
          />
        </div>
    </div>
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