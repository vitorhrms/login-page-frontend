import RenderRoutes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "./styles/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RenderRoutes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
