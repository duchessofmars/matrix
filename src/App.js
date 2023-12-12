import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import axios from "axios";

const App = () => {
  const [workerId, setWorkerId] = useState("");
  const [login, setLoggedIn] = useState(true);


  useEffect(() => {
    fetch("http://localhost:3001")
    .then(response => response.json())
    .then(data => {
      setLoggedIn(true);
      setWorkerId(data.workerId);

    });
}, []);

const handleLogin = () => {
  // Simulate a login request
  fetch('http://localhost:3001', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setLoggedIn(true);
        setWorkerId(data.workerId);
      }
    });
};

/*
const handleLogout = () => {
  // Simulate a logout request
  fetch('http://localhost:3001', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setLoggedIn(false);
        setWorkerId('');
      }
    });
};
*/
  return (
    <CurrentUserContext.Provider value={workerId}>
      <div className="page">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Main onLogin={login}/>}></Route>
        </Routes>

        <Footer />
      </div>
      </CurrentUserContext.Provider>
  );
};

export default App;
