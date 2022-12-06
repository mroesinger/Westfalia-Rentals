function Reviews() {
  return (
    <div>
      <p className="maintenance-text">
        DOWN FOR MAINTENANCE... IN THE SHOP FOR REPAIRS!
      </p>
      <div className="maintenance-image-div"></div>
    </div>
  );
}

export default Reviews;

// import { useState, useEffect } from "react";
// import { Button, Form, Header } from "semantic-ui-react";
// import "./App.css";

// function Reviews({ id }) {
//   const [reviews, setReviews] = useState([]);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:3000/reviews/${id}`)
//       .then((r) => r.json())
//       .then((data) => setReviews(data));
//   }, []);

//   function postReview(reviewObj) {
//     setReviews([...reviews, reviewObj]);
//   }
//   function handlePost(e) {
//     e.preventDefault();

//     let reviewObj = {
//       text: text,
//       review_id: id,
//     };

//     fetch(`api/reviews`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(reviewObj),
//     })
//       .then((r) => r.json())
//       .then((data) => postReview(data));
//     e.target.reset();
//   }

//   function deleteReview() {
//     fetch(`/reviews/${id}`, { method: "DELETE" });
//   }

//   const renderReviews = reviews.map((review) => {
//     return (
//       <Reviews
//         key={review.id}
//         date={review.date}
//         name={review.name}
//         body={review.body}
//         deletereview={deleteReview}
//       />
//     );
//   });

//   return (
//     <div className="reviews-container">
//       <Header as="h3" dividing>
//         reviews
//       </Header>
//       <div className="reviews-panel">{renderReviews}</div>
//       <div className="reviews-form">
//         <Form onSubmit={handlePost}>
//           <Form.Field onChange={(e) => setText(e.target.value)} value={text}>
//             <label>Your Review:</label>
//             <input placeholder="" />
//           </Form.Field>
//           <Button type="submit">Submit</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Reviews;
