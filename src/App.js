import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearch from "./components/BookSearch/BookSearch";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import BookCard from "./components/BookCard/BookCard";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Book Search App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BookSearch />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
