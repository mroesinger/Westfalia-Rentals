// import { useState, useEffect } from "react";
// import { Button, Form, Header } from "semantic-ui-react";
// import "./index.css";

// function Reviews({ id }) {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
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
//       name: name,
//       text: text,
//       review_id: id,
//     };

//     fetch(`http://localhost:3000/reviews`, {
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
//     fetch(`http://localhost:3000/reviews/${id}`, { method: "DELETE" });
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
//           <Header as="h2" dividing></Header>
//           <Form.Field onCvane={(e) => setName(e.target.value)} value={name}>
//             <label>Username:</label>
//             <input placeholder="" />
//           </Form.Field>
//           <Form.Field onCvane={(e) => setText(e.target.value)} value={text}>
//             <label>review text:</label>
//             <input placeholder="" />
//           </Form.Field>
//           <Button type="submit">Submit</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Reviews;
