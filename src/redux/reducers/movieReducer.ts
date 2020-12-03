const SET_DATA = "SET_DATA";
const SET_ERROR = "SET_ERROR";

export type StateType = {
  movie: string;
  id: string;
  posterLink: string;
  searchErrorMessage: string;
  isSearchError: boolean;
};

const initialState: StateType = {
  movie: "",
  id: "",
  posterLink: "",
  searchErrorMessage: "",
  isSearchError: false,
};

const authReducer = (state = initialState, action: ActionsType): StateType => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export type SetDataType = {
  type: typeof SET_DATA;
  payload: { id: string; movie: string; posterLink: string };
};
export type SetErrorType = {
  type: typeof SET_ERROR;
  payload: { searchErrorMessage: string; isSearchError: boolean };
};

export type ActionsType = SetDataType | SetErrorType;

export const setData = (
  id: string,
  movie: string,
  posterLink: string
): ActionsType => ({
  type: SET_DATA,
  payload: { id, movie, posterLink },
});
export const setError = (
  searchErrorMessage: string,
  isSearchError: boolean
): ActionsType => ({
  type: SET_ERROR,
  payload: { searchErrorMessage, isSearchError },
});

export default authReducer;
