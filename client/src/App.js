import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./About.js";
import LoginSplash from "./LoginSplash.js";
import Nav from "./Nav.js";
import VanPage from "./VanPage.js";
import SubmitYourVan from "./SubmitYourVan.js";
import Trips from "./Trips.js";
import Reviews from "./Reviews.js";
import { Button } from "semantic-ui-react";

function App() {
  const [vans, setVans] = useState([]);
  const [user, setUser] = useState(false);
  const addVan = (van) => {
    setVans((vans) => [...vans, van]);
  };

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/vans")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setVans(data);
      });
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1 id="welcome">SURFS UP, {user.username}!</h1>
          <Nav setUser={setUser} user={user} />

          <Routes>
            <Route
              path="/VanPage"
              element={<VanPage vans={vans} user={user} />}
            />
            <Route
              path="/SubmitYourVan"
              element={<SubmitYourVan addVan={addVan} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/nav" element={<Nav />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
          <div className="footer">
            <div className="brand-buttons">
              <Button circular color="facebook" icon="facebook" />
              <Button circular color="twitter" icon="twitter" />
              <Button circular color="instagram" icon="instagram" />
              <Button circular color="google plus" icon="google plus" />
            </div>
            <div id="vw">
              <img
                src="https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png"
                alt="vw"
              />
            </div>
            <div id="westfalia">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/westfalia-logo-png-transparent.png"
                alt="westfalia"
              />
            </div>
          </div>
        </div>
      ) : (
        <LoginSplash setUser={setUser} />
      )}
    </div>
  );
}

export default App;
