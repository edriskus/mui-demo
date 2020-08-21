import React from "react";
import BasicTheme from "../../styles/BasicTheme";
import Signup from "../Signup/Signup";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={BasicTheme}>
      <CssBaseline />
      <Navigation />
      <Signup />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
