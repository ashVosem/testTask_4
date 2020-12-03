import background from "../../assets/images/background.jpg";

import styled from "@emotion/styled";

export const Button = styled.button`
  background: transparent;

  position: relative;
  cursor: pointer;

  color: white;

  width: 100%;
  outline: none;
  border: none;
  padding: 0;

  height: 100%;
  transform: skewX(30deg);
  @media (max-width: 600px) {
    transform: skewX(0deg);
  }
`;

export const StyledInput = styled.input`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  width: 100%;
  @media (max-width: 600px) {
    transform: skewX(0deg);
    padding: 10px;
  }
  transform: skewX(30deg);

  padding: 10px 10px 10px 20px;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 50px rgb(204, 204, 204) inset;
  }
`;

export const Container = styled.div`
  display: flex;

  padding: 30px;
  flex-direction: column;
  width: 70%;
  min-height: 50%;

  height: auto;

  background: rgba(255, 255, 255, 0.95);

  box-shadow: 0px 0px 56px 38px rgba(0, 0, 0, 0.8);

  border-radius: 5px;

  form {
    display: flex;
    padding-top: 10px;
    > :nth-of-type(2) {
      flex-basis: 20%;
      @media (max-width: 600px) {
        flex-basis: 40%;
      }
      background: rgb(223, 42, 42);
      outline: 2px solid white;
    }
  }
`;
export const RotatedField = styled.div<{ error?: boolean }>`
  overflow: hidden;
  display: flex;
  flex-basis: 80%;
  background: rgb(204, 204, 204);

  margin: 0;
  z-index: 3;

  width: auto;

  outline: 2px solid
    ${({ error }) =>
      // eslint-disable-next-line no-nested-ternary
      error ? "rgb(255, 255, 255)" : "rgb(223, 42, 42)"};

  @media (max-width: 600px) {
    transform: skewX(0deg);
    flex-basis: 60%;
  }

  transform: skewX(-30deg);
`;
export const Error = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: -25px;
  margin-left: 10px;
  @media (max-width: 600px) {
    transform: skewX(0deg);
    margin-left: 0px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  position: relative;
  z-index: 2;
  @media (max-width: 400px) {
    max-width: 350px;
  }
  max-width: 200px;
  transition: 0.2s;

  :hover {
    transform: translateX(10%);
    cursor: pointer;
  }
`;
export const StyledTitle = styled.h1``;
export const StyledLink = styled.a``;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${background});
  ::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3px);
  }
  > * {
    position: absolute;
    z-index: 2;
  }
`;
