import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, editMovie } from "../redux/actions/movieActions";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";

const AddEditMovie = () => {
  const history = useNavigate();
  const match = useParams();

  const dispatch = useDispatch();
  const movieId = match.id;
  const movie =
    useSelector((state) =>
      state.movies.movies.find((m) => m._id === movieId)
    ) || {};

  const [title, setTitle] = useState(movie.title || "");
  const [description, setDescription] = useState(movie.description || "");
  const [releaseYear, setReleaseYear] = useState(movie.releaseYear || "");
  const [genre, setGenre] = useState(movie.genre || "");

  useEffect(() => {
    if (movieId && movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [movieId, movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, releaseYear, genre };
    if (movieId) {
      dispatch(editMovie(movieId, newMovie));
    } else {
      dispatch(addMovie(newMovie));
    }
    history("/");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2 gap-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="text-xl p-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-xl p-4"
        />
        <input
          type="tel"
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          className="text-xl p-4"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="text-xl p-4"
        />
        <div className="flex justify-between mx-4">
          <Link to="/">
            <button type="submit" className="text-xl bg-cyan-700 p-3 ">
              Cancle
            </button>
          </Link>
          <button type="submit" className="text-xl bg-cyan-700 p-3 ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditMovie;
