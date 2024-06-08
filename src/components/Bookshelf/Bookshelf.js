import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import NavigationButton from "../NavigationButton";
import "./Bookshelf.css";

function Bookshelf() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf-page">
      <h2>My Bookshelf</h2>
      <NavigationButton to="/" label="Go to Book Search" />
      <div className="results">
        {bookshelf.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            onRemove={() => removeFromBookshelf(book.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
