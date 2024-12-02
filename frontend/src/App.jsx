import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import Login from "./pages/Login";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import MyProfile from "./pages/MyProfile";

import Art from "./pages/Art";
import Navbar from "./compenents/Navbar";
import Footer from "./compenents/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/creators/:speciality" element={<Creators />} />
        <Route path="/creators/:creatorstId" element={<Creators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/my-profile" element={<MyProfile />} />
       
        <Route path="/art/:creatorId" element={<Art />} />
       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
