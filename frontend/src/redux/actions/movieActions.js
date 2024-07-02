import axios from "axios";

export const getMovies = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/movies");
  dispatch({ type: "GET_MOVIES", payload: res.data });
};

export const addMovie = (movie) => async (dispatch) => {
  const res = await axios.post("http://localhost:8080/api/movies", movie);
  dispatch({ type: "ADD_MOVIE", payload: res.data });
};

export const editMovie = (id, updatedMovie) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:8080/api/movies/${id}`,
    updatedMovie
  );
  dispatch({ type: "EDIT_MOVIE", payload: res.data });
};

export const deleteMovie = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/api/movies/${id}`);
  dispatch({ type: "DELETE_MOVIE", payload: id });
};

export const toggleWatched = (id) => async (dispatch) => {
  const res = await axios.patch(
    `http://localhost:8080/api/movies/${id}/watched`
  );
  dispatch({ type: "TOGGLE_WATCHED", payload: res.data });
};

export const rateMovie = (id, rating, review) => async (dispatch) => {
  const res = await axios.patch(`http://localhost:8080/api/movies/${id}/rate`, {
    rating,
    review,
  });
  dispatch({ type: "RATE_MOVIE", payload: res.data });
};
