import "./App.css";
import React from "react";
import Routes from "./Routes";
import GlobalNavbar from "./components/GlobalNavbar";
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
      <GlobalNavbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
