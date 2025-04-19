import GlobalStyle from "./config/GlobalStyles";
import Theme from "./config/Theme";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <Theme>
        <Home />
        <GlobalStyle />
      </Theme>
    </div>
  );
}

export default App;
