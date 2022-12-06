import "./App.css";
// import Trips from "./Trips";
import { Button, Icon, Label, Input, Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { DatePicker } from "react-rainbow-components";
// import { Route, Routes } from "react-router-dom";

function VanCard({
  year_make_model,
  description,
  transmission,
  roof,
  dogs,
  equipment,
  location,
  owner,
  price,
  image,
  id,
  user,
  addReview,
}) {
  const [trip, setTrip] = useState("");
  const [trips, setTrips] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const containerStyles = {
    maxWidth: 400,
  };
  const disabledDays = [];
  trips.forEach((trip) => {
    const start = new Date(trip.start_date);
    const end = new Date(trip.end_date);
    let newDate = start;
    while (newDate < end) {
      disabledDays.push(newDate);
      newDate = new Date(Number(newDate));
      newDate.setDate(newDate.getDate() + 1);
    }
  });
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  const [formVisible, setFormVisible] = useState(false);
  const [review, setReview] = useState("");
  let newReview = {
    review: review,
    review_id: id,
  };

  // useEffect(() => {
  //   fetch("/api/vans/" + id + "/trips")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setTrips(data);
  //     });
  // }, []);

  const handleSubmission = (e) => {
    e.preventDefault();

    let newTrip = {
      van_id: id,
      start_date: trip.range[0],
      end_date: trip.range[1],
    };

    fetch("/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setTrips((trips) => [...trips, data]);
          setTrip({ ...trip, range: [] });
        });
      }
    });
    e.target.reset();
  };
  function showCalendar() {
    setCalendarVisible(!calendarVisible);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/trips", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((reviewData) => {
        addReview(reviewData);
        setReview("");
      });
    e.target.reset();
    setFormVisible(!formVisible);
  };

  function showReviewForm() {
    setFormVisible(!formVisible);
  }

  // function deleteReview() {
  //   fetch(`http://localhost:3000/reviews/${id}`, { method: "DELETE" });
  // }

  return (
    <ul className="card">
      <img className="card-img" src={image} alt={owner} />
      <p id="van-name">{year_make_model}</p>
      <h4>Description:{description}</h4>
      <h4>Transmission: {transmission}</h4>
      <h4>Roof Type: {roof}</h4>
      <h4>Equipment: {equipment}</h4>
      <h4>Dogs Allowed: {dogs}</h4>
      <h4>Location:{location}</h4>
      <h4>Owner Name: {owner}</h4>
      <h4>Price per night: $ {price}</h4>

      <Button onClick={showCalendar} className="ui-button">
        Rent This Westy!
      </Button>

      <Button onClick={showReviewForm} className="ui-button">
        Add Review!
      </Button>
      {/* <Button onClick={deleteReview} className="ui-button">
        Delete Review!
      </Button> */}
      <Button as="div" labelPosition="right">
        <Button color="red" onClick={handleClick}>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic color="red" pointing="left">
          {likes}
        </Label>
      </Button>
      {formVisible ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              onChange={(e) => setReview(e.target.value)}
              value={Input}
              control={Input}
              placeholder="How did you like this van?"
            />
            <Form.Field control={Button} content="Submit!" />
          </Form.Group>
        </Form>
      ) : null}

      {calendarVisible ? (
        <div
          className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
          style={containerStyles}
        >
          <form onSubmit={handleSubmission}>
            <DatePicker
              id="datePicker-15"
              // label="Choose your own adventure!"
              disabledDays={disabledDays}
              placeholder="Choose your own VW adventure!"
              selectionType="range"
              formatStyle="large"
              variant="single"
              value={trip.range}
              onChange={(value) => setTrip({ range: value })}
            />
            <Button type="submit" color="blue">
              Rent
            </Button>
          </form>
        </div>
      ) : null}
    </ul>
  );
}
export default VanCard;
