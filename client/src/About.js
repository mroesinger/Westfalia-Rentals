import "./App.css";
// import { Button } from "semantic-ui-react";
// import emailjs from "@emailjs/browser";
import React from "react";
// import React, { useRef } from "react";

function About() {
  return (
    <div className="about">
      <h1 className="abouth1">ABOUT</h1>
      <div id="about-text-div">
        <p>
          WESTFALIA rentals, is a California based platform for VW lovers to
          rent their favorite vans.{"   "}
        </p>
        <p>
          Deal with the owners directly so you can have the most personal
          experience.{"  "}
        </p>
        <p>
          All vans are screened for reliabilty and maintanance standards by
          local specialists before being offered on our platform.
        </p>
      </div>

      <div id="about-image-div"></div>
    </div>
  );
}

// export const About = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
export default About;
