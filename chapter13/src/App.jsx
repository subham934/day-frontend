import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Laptop from "./pages/Laptop.jsx";
import Mobile from "./pages/Mobile.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />}>
          <Route path="lappy" element={<Laptop />} />
          <Route path="/service/mobile" element={<Mobile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
