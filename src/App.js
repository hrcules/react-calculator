import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";

import { Calculator } from "./components/Calculator";
import { Footer } from "./components/Footer";

import GlobalStyle from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Calculator toogleTheme={toogleTheme} />

        <Footer />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
