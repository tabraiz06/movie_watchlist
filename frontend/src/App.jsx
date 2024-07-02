import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieList from "./components/MovieList";
import AddEditMovie from "./components/AddEditMovie";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MovieList />} />
        <Route path="/add" element={<AddEditMovie />} />
        <Route path="/edit/:id" element={<AddEditMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
