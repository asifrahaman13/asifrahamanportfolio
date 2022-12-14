import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const url="https://portfoliodummy.adaptable.app/"

const App = () => {
  return (
    <>
      <>
        <body>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </body>
      </>

    </>
  );
};

export default App;
