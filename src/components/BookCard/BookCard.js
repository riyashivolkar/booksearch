import React from "react";
import "./BookCard.css";

function BookCard({ book, onAdd, onRemove }) {
  return (
    <div className="book-card">
      <h3>Book Title: {book.title}</h3>
      <p>Edition Count: {book.edition_count}</p>
      {onAdd && (
        <button onClick={onAdd} className="action-button">
          Add to Bookshelf
        </button>
      )}
      {onRemove && (
        <button onClick={onRemove} className="action-button">
          Remove from Bookshelf
        </button>
      )}
    </div>
  );
}

export default BookCard;
