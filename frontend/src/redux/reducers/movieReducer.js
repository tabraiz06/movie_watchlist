const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload };
    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, action.payload] };
    case "EDIT_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case "TOGGLE_WATCHED":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case "RATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
