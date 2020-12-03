import React, { FC, useCallback, useEffect } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { StateType } from "../../redux/store";

import {
  Button,
  StyledInput,
  Container,
  RotatedField,
  RotatedButton,
  Error,
  Layout,
  StyledImg,
  StyledTitle,
  StyledLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../redux/thunks/fetchData";

interface ValuesType {
  input: string;
}

const appSelector = (state: StateType) => state.movie;

export const App: FC = () => {
  const movie = useSelector((state: StateType) => appSelector(state).movie);
  const posterLink = useSelector(
    (state: StateType) => appSelector(state).posterLink
  );
  const searchErrorMessage = useSelector(
    (state: StateType) => appSelector(state).searchErrorMessage
  );

  const isSearchError = useSelector(
    (state: StateType) => appSelector(state).isSearchError
  );
  const id = useSelector((state: StateType) => appSelector(state).id);

  const dispatch = useDispatch();

  useEffect(() => {
    alert("Input validation: min 4, max: 50, required, english input only");
  }, []);

  const ValidationSchema = Yup.object({
    input: Yup.string()
      .min(4, "Too short!")
      .max(50, "Too Long!")
      .required("Required")
      .matches(/[a-zA-Z]/, "English please"),
  });

  const onSubmit = useCallback(
    ({ input }: ValuesType, { setSubmitting }: FormikHelpers<ValuesType>) => {
      dispatch(fetchData(input, setSubmitting));
      setSubmitting(true);
    },
    [movie]
  );

  const initialValues: ValuesType = { input: "" };
  return (
    <Layout>
      <Container>
        <h1>Movie Search</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, isSubmitting }) => (
            <Form>
              <RotatedField error={!errors.input}>
                <StyledInput
                  placeholder="Search a movie"
                  onChange={handleChange}
                  value={values.input}
                  name="input"
                  type="text"
                />
              </RotatedField>
              <RotatedButton isDisabled={isSubmitting}>
                <Button disabled={isSubmitting} type="submit">
                  Search
                </Button>
              </RotatedButton>
              {errors.input && <Error>{errors.input}</Error>}
              {isSearchError && <Error>{searchErrorMessage}</Error>}
            </Form>
          )}
        </Formik>
        {movie && (
          <>
            <StyledTitle>{movie}</StyledTitle>

            <StyledLink href={`https://www.imdb.com/title/${id}/`}>
              <StyledImg src={posterLink} />
            </StyledLink>
          </>
        )}
      </Container>
    </Layout>
  );
};
export default App;
