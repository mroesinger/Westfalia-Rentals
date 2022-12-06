import React from "react";
import "./App.css";
import { Button } from "semantic-ui-react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";

function LoginSplash({ setUser }) {
  return (
    <div id="big-splash">
      <div id="splash">
        <div id="login-button">
          <Link to="/login">
            <Button className="log-button" type="button">
              Login to Westfalia Rentals!
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="log-button" type="button">
              Sign-up to Westfalia Rentals!
            </Button>
          </Link>
        </div>
      </div>
      <div id="splash">
        <Routes>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default LoginSplash;
