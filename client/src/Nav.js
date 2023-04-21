import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Nav({ setUser, user }) {
  function logOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div id="nav-bar">
      {/* <div id="welcome">SURFS UP, {user.username}!</div> */}
      <div id="title-container">WESTFALIA rentals</div>
      <div id="nav-image-div">
        <img
          src="https://preview.redd.it/b59rtqxfgl941.jpg?width=960&crop=smart&auto=webp&s=134f709543c7d47a9a5440f0fcac164e0a3b1dc1"
          alt="westy"
        />
      </div>
      <div id="button-container">
        <Button.Group>
          <Link to="/VanPage">
            <Button className="ui-button" type="button">
              Vans For Rent
            </Button>
          </Link>

          <Link to="/SubmitYourVan">
            <Button className="ui-button" type="button">
              Submit Your Van
            </Button>
          </Link>

          <Link to="/about">
            <Button className="ui-button" type="button">
              About
            </Button>
          </Link>

          {/* <Link to="/reviews">
            <Button className="ui-button" type="button">
              Reviews
            </Button>
          </Link> */}

          <Link to="/trips">
            <Button className="ui-button" type="button">
              Your Adventures!
            </Button>
          </Link>

          <Button onClick={logOut} className="ui-button">
            Log Out
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}

export default Nav;
