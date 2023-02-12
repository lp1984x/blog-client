import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Single from "./components/pages/Single";
import Write from "./components/pages/Write";
import About from "./components/About/About";
import { Container } from "react-bootstrap";
import "./app.scss";
import Login from "./components/pages/Login";
import Reg from "./components/pages/Reg";
import { MyContext } from "./context/Context";

function App() {
  const { user } = useContext(MyContext);
  return (
    <div className="App ">
      <Header />
      <Container className="cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/settings" element={user ? <Settings /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
