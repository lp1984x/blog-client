import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Fotter";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Single from "./components/pages/Single";
import Write from "./components/pages/Write";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="single" element={<Single />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
