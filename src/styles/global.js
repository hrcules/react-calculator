import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  --first-color: #8e16e3;
  --first-color-alt: #8014CC;

  --body-color: ${(props) => props.theme.colors.bodyColor};
  --text-color: ${(props) => props.theme.colors.textColor};
  --calculator-color: ${(props) => props.theme.colors.calulatorColor};
  --button-color: ${(props) => props.theme.colors.buttonColor};
  --button-hover-color: ${(props) => props.theme.colors.buttonHoverColor};
  --border-color: ${(props) => props.theme.colors.borderColor};
}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }
  body {
    color: var(--text-color);
    background-color: var(--body-color);

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  a {
    text-decoration: none;
  }

`;
