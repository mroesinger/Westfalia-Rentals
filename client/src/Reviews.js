import { useState, useEffect } from "react";
import { Button, Form, Header, Input } from "semantic-ui-react";
import "./App.css";

function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const renderReviews = reviews.map((review) => {
    return (
      <Reviews
        key={review.id}
        date={review.date}
        text={review.text}
        body={review.body}
      />
    );
  });

  let newReview = {
    text: text,
    review_id: id,
  };

  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  const postReview = (newReview) => {
    setReviews((reviews) => [...reviews, newReview]);
  };
  const handlePost = (e) => {
    e.preventDefault();
    fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((data) => {
        postReview(data);
        setText("");
      });
    e.target.reset();
  };

  function deleteReview() {
    fetch(`/reviews/${id}`, { method: "DELETE" });
  }

  return (
    <div className="reviews-container">
      <Header as="h3" dividing>
        yay
      </Header>
      <div className="reviews-panel">{renderReviews}</div>
      <div className="reviews-form">
        <Form onSubmit={handlePost}>
          <Form.Field
            onChange={(e) => setText(e.target.value)}
            value={text}
            control={Input}
            placeholder="Your Review"
          />
          <Form.Field control={Button} content="Submbmit" />{" "}
        </Form>
      </div>
    </div>
  );
}

export default Reviews;
