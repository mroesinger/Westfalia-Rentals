import "./App.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";
format(new Date(), "dd/mm/yyyy");

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
    <div>
      {trips.length > 0 ? (
        <>
          <h1>Congratulations! You're going on an adventure!</h1>
          <h2>
            You're journey will be from{trips[0].start_date} UNTIL{" "}
            {trips[0].end_date}
          </h2>
        </>
      ) : null}
    </div>
  );
}

export default Trips;
