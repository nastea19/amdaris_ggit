import React from "react";
import "../App.css"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BookTable from "./book-table";
import { addBook, getBooks, updateBook } from "../services/book-service";
import BookCard from "./book-card";

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
      <div className="bookcard">
        <div className="bookcardspacing">
          <BookCard
            title="It Ends with Us"
            subheader="Colleen Hoover, 2016"
            image="/images/itendswithus.jpeg"
            alt="It Ends with Us"
            description="Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true."
          />
        </div>

        <div className="bookcardspacing">
          <BookCard
            title="Book Lovers"
            subheader="Emily Henry, 2022"
            image="/images/booklovers.jpeg"
            alt="Book Lovers"
            description="Nora Stephens' life is books—she's read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby."
          />
        </div>

        <div className="bookcardspacing">
          <BookCard
            title="Love on the Brain"
            subheader="Ali Hazelwood, 2022"
            image="/images/loveontheb.jpeg"
            alt="Love on the Brain"
            description="Bee Königswasser lives by a simple code: What would Marie Curie do? If NASA offered her the lead on a neuroengineering project - a literal dream come true - Marie would accept without hesitation. Duh. But the mother of modern physics never had to co-lead with Levi Ward."
          />
        </div>

        <div className="bookcardspacing">
          <BookCard
            title="Red, White & Royal Blue"
            subheader="Casey McQuiston, 2019"
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
    </Box>
  );
}


