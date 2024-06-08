import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import NavigationButton from "../NavigationButton";
import "./BookSearch.css";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Function to fetch initial search results
    const fetchInitialResults = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=&limit=10&page=1`
        );
        const data = await response.json();
        setResults(data.docs);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching initial search results:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    // Fetch initial results when the component mounts
    fetchInitialResults();
  }, []);

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    try {
      let response;
      if (searchQuery.length > 0) {
        response = await fetch(
          `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`
        );
      } else {
        response = await fetch(
          `https://openlibrary.org/search.json?q=&limit=10&page=1`
        );
      }
      const data = await response.json();
      setResults(data.docs);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push(book);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };

  return (
    <div className="search-page">
      <NavigationButton to="/bookshelf" label="My Bookshelf" />
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search by book name"
      />
      <div className="results">
        {loading ? (
          <p>Loading...</p> // Display loading indicator while data is being fetched
        ) : results.length > 0 ? (
          results.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onAdd={() => addToBookshelf(book)}
            />
          ))
        ) : (
          <p>No results found.</p> // Display message when there are no results
        )}
      </div>
    </div>
  );
}

export default BookSearch;
