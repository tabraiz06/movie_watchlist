// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import AddNewUser from "./components/AddNewUser";
// // import Register from "./components/Register";

// function App() {
//   return (
//     <>
//       <h1>hello from app </h1>
//       <AddNewUser />
//       {/* <Register />  */}
//     </>
//   );
// }

// export default App;

// frontend/src/App.js
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
