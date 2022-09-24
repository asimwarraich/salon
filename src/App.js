import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.scss";
import Home from "../src/screens/Home";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import Booking from "./screens/Booking";
import Aboutus from "./screens/Aboutus";
import Contactus from "./screens/Contactus";
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
