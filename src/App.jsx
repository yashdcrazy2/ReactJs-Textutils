import React from "react";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
           
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
