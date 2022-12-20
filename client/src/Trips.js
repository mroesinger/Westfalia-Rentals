import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

function Trips() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("/api/trips/")
      .then((r) => r.json())
      .then((data) => {
        setTrips(data);
      });
  }, []);

  return (
    <div id="trips">
      {trips.length > 0 ? (
        <>
          <h1 id="trips-h1">CONGRATULATIONS! You're going on an adventure!</h1>
          <h1 id="trips-dates">
            Your journey will be from:
            {trips[0].start_date} through {trips[0].end_date}
          </h1>
          <h2 id="trips">
            If you have any questions regarding your reservation please reach
            out to us <Button className="ui-button">HERE!</Button>
          </h2>
        </>
      ) : null}
      <div id="trips-image-div"></div>
    </div>
  );
}

export default Trips;
