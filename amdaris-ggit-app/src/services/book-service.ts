import { Book } from "../components/books";

const BOOKS_STORAGE_KEY = "books"; // Define a storage key for your books data

// Function to get books from localStorage
export const getBooks = (): Book[] => {
  const storedData = localStorage.getItem(BOOKS_STORAGE_KEY);
  if (storedData) {
    return JSON.parse(storedData) as Book[];
  }
  return [];
};

// Function to save books to localStorage
export const saveBooks = (books: Book[]): void => {
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
};

// Function to add a new book
export const addBook = (newBook: Book): void => {
  const existingBooks = getBooks();
  const updatedBooks = [...existingBooks, newBook];
  saveBooks(updatedBooks);
};

// Function to update a book's details by ID
export const updateBook = (bookId: number, updatedBook: Book): void => {
  const existingBooks = getBooks();
  const updatedBooks = existingBooks.map((book) => {
    if (book.id === bookId) {
      return { ...book, ...updatedBook };
    }
    return book;
  });
  saveBooks(updatedBooks);
};

// Function to delete a book by ID
export const deleteBook = (bookId: number): void => {
  const existingBooks = getBooks();
  const updatedBooks = existingBooks.filter((book) => book.id !== bookId);
  saveBooks(updatedBooks);
};

// Function to update the readStatus of a book by ID
export const updateReadStatus = (bookId: number, readStatus: string): void => {
  const existingBooks = getBooks();
  const updatedBooks = existingBooks.map((book) => {
    if (book.id === bookId) {
      return { ...book, readStatus };
    }
    return book;
  });
  saveBooks(updatedBooks);
};
