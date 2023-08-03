import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import SigninWrapper from "./components/SigninWrapper";
import WelcomePage from "./components/WelcomePage";


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" Component={SignupForm} />
        <Route path="/signin" element={<SigninWrapper />} />
        <Route path="/home" Component={WelcomePage} />
      </Routes>
    </Router>
  );
}

export default App;
