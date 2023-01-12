import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Single from "./components/pages/Single";
import Write from "./components/pages/Write";

function App() {
  return (
    <div className="App">
      <Header />
      <Write />
    </div>
  );
}

export default App;
