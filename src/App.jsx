import Router from "shared/Router";
import GlobalStyle from "Globalstyle";
import { LettersProvider } from "context/LetterContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <LettersProvider>
        <Router />
      </LettersProvider>
    </>
  )
}

export default App;