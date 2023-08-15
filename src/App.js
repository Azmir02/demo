import "./App.css";
import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { primary } from "./styles/theme";
import ProductConfigurator from "./components/ProductConfigurator";
import Layout from "./Layout/Layout";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(primary);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Layout>
        <ProductConfigurator />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
