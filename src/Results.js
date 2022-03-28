import React, { lazy } from "react";
const Book = lazy(() => import("./Book"));

export default function Results({ books }) {
  const tiles = books.map((book, i) => (
    <Book
      key={book.isbn}
      title={book.title}
      authors={book.authors}
      publishDate={book.publishDate}
      imgURL={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false `}
    />
  ));
  return (
    <>
      <div className="resultsNum">Showing {books.length} results</div>
      {tiles}
    </>
  );
}
