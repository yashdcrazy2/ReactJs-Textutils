import React from "react";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";


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
