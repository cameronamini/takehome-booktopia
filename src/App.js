import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
// const AiOutlineSearch = lazy(() => import("react-icons/ai"));
const Book = lazy(() => import("./Book"));

export default function App() {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [sort, setSort] = useState("");
  const API_URL = `https://openlibrary.org/search.json?title=`;

  const sortFn = (books, sortType) => {
    setLoading(true);
    if (sortType === "title") {
      const sortedBooks = [...books].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setBooks(sortedBooks);
    } else if (sortType === "publishDate") {
      const sortedBooks = [...books].sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);
        return dateB - dateA;
      });
      setBooks(sortedBooks);
    }
    setLoading(false);
  };

  const getBooks = async (queryStr) => {
    setLoading(true);
    try {
      const {
        data: { docs },
      } = await axios.get(`${API_URL}${queryStr}`);

      if (docs.length === 0) setNoResults(true);
      else {
        setNoResults(false);
      }
      const slice = docs.slice(0, 10);

      const results = slice.map((item) => ({
        title: item.title,
        authors: item.author_name,
        isbn: item.isbn[0].trim(),
        publishDate: item.publish_date[0],
      }));
      if (sort) {
        sortFn(results, sort);
      } else {
        setBooks(results);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (books && sort) sortFn(books, sort);
  }, [sort]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const selectChange = (e) => {
    setSort(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      //must replace whitespace within string with '+' symbol
      const query = input.trim().replace(" ", "+");
      getBooks(query);
    }
    setInput("");
  };

  const tiles = books.map((book) => (
    <Book
      key={book.isbn}
      title={book.title}
      authors={book.authors}
      publishDate={book.publishDate}
      imgURL={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false `}
    />
  ));

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <header className="header">
          <h1 className="logo">Booktopia</h1>
          <form className="form" onSubmit={submitHandler}>
            <label className="hiddenLabel" aria-hidden htmlFor="searchbar">
              <input
                className="textInput"
                name="searchbar"
                id="searchbar"
                type="text"
                value={input}
                onChange={changeHandler}
              />
            </label>
            <button
              className="submit"
              name="submit search"
              aria-label="submit search"
              type="submit"
              value="Submit Search"
            >
              <AiOutlineSearch />
            </button>
          </form>
        </header>
        <div className="sort">
          <label className="sort-label" htmlFor="sortBy">
            Sort by:
          </label>
          <select
            className="sort-select"
            id="sortBy"
            name="sortBy"
            onChange={selectChange}
          >
            <option value="">Top Matches</option>
            <option value="title">Title(A-Z)</option>
            <option value="publishDate">Most Recent</option>
          </select>
        </div>

        {loading && <div className="loading">Loading</div>}
        <main className="resultsContainer">
          {!loading && books ? tiles : null}
          {!loading && noResults ? (
            <div className="no-results">No Results found</div>
          ) : null}
        </main>
      </Suspense>
    </div>
  );
}
