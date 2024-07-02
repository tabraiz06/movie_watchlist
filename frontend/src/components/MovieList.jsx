import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  deleteMovie,
  toggleWatched,
} from "../redux/actions/movieActions";
import { Link } from "react-router-dom";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched(id));
  };

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-[2rem]">
      <h1 className="text-3xl font-bold text-center">
        Movie WatchList Assignment
      </h1>
      <button className="text-xl bg-cyan-700 p-6 ">
        <Link to="/add">Add Movie</Link>
      </button>
      <ul className="flex flex-col gap-4">
        {movies.length === 0 ? (
          <>
            <h1 className="text-3xl font-bold text-center">
              You have not added any movies. Please add first
            </h1>
          </>
        ) : (
          movies.map((movie) => (
            <li key={movie._id} className="flex gap-[1rem] *:">
              <h1 className="text-3xl font-bold text-center">{movie.title}</h1>
              <Link to={`/movie/${movie._id}`} className="text-xl text-center">
                <button className="text-xl text-center bg-cyan-700 p-6">
                  View Details
                </button>
              </Link>
              <button
                onClick={() => handleDelete(movie._id)}
                className="text-xl bg-cyan-700 p-6"
              >
                Delete
              </button>
              <button
                onClick={() => handleToggleWatched(movie._id)}
                className="text-xl bg-cyan-700 p-6"
              >
                {movie.watched ? "Unwatch" : "Watch"}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MovieList;
