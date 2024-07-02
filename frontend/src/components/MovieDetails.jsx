// frontend/src/components/MovieDetails.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rateMovie } from "../redux/actions/movieActions";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const match = useParams();
  const dispatch = useDispatch();

  const movieId = match.id;
  const movie = useSelector((state) =>
    state.movies.movies.find((m) => m._id === movieId)
  );

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRating = () => {
    dispatch(rateMovie(movieId, rating, review));
    setRating(0);
    setReview("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Movie Title : {movie.title}</h1>
        <p className="text-xl">Movie Description : {movie.description}</p>
        <p className="text-xl">Release Year: {movie.releaseYear}</p>
        <p className="text-xl">Genre: {movie.genre}</p>
        <p className="text-xl">Watched: {movie.watched ? "Yes" : "No"}</p>
        <p className="text-xl">Rating: {movie.rating}</p>
        <p className="text-xl">Review: {movie.review}</p>
        <div className="my-4 ">
          <h1 className="text-xl font-bold">Edit Rating and Review</h1>
          <label>Rate:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mx-3"
          />
          <button
            onClick={handleRating}
            className="text-xl bg-cyan-700 p-3 mx-3"
          >
            Submit Rating
          </button>
        </div>
        <Link to={`/edit/${movieId}`}>
          <button className="text-xl bg-cyan-700 p-3 ">Edit Movie</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
