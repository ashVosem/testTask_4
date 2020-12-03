import { setError } from "./../reducers/movieReducer";
import { ActionsType, setData } from "../reducers/movieReducer";
import { ThunkAction } from "redux-thunk";
import { StateType } from "../store";

const fetchData = (
  input: string,
  setSubmitting: (isSubmitting: boolean) => void
): ThunkAction<void, StateType, unknown, ActionsType> => (dispatch) => {
  fetch(`https://www.omdbapi.com/?s=${input}&apikey=28fea61`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      try {
        dispatch(
          setData(
            data.Search[0].imdbID,
            data.Search[0].Title,
            data.Search[0].Poster
          )
        );
      } catch (error) {
        dispatch(setError(data.Error, true));
      }
      setSubmitting(false);
    });
};

export default fetchData;
