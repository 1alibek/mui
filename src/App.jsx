import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Social from "./components/social";
import Production from "./components/production";
import FeatureSection from "./components/katalog";
import ComponentShowcase from "./components/box";
import Testimonials from "./components/box2";
import Footer from "./components/footer";
import Showcase from "./components/showcase";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <hr className="text-gray-300" />
      <Showcase/>
      <Social />
      <Production />
      <FeatureSection />
      <ComponentShowcase />
      <Testimonials />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
