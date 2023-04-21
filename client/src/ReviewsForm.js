// import { useState } from "react";
// import { Button, Form, Input } from "semantic-ui-react";

// function PostReview({ onReviewSubmit }) {
//   const [text, setText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newReview = {
//       text: text,
//     };
//     fetch("/api/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newReview),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         onReviewSubmit(data);
//         setText("");
//       });
//   };

//   return (
//     <div className="post-review-container">
//       <Form onSubmit={handleSubmit}>
//         <Form.Field
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//           spellCheck
//           control={Input}
//           placeholder="Your Review"
//         />
//         <Form.Field control={Button} content="Submit" />
//       </Form>
//     </div>
//   );
// }

// export default PostReview;
