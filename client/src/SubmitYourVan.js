import { useState } from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";
import "./App.css";

function SubmitYourVan({ addVan }) {
  const [owner, setOwner] = useState("");
  const [year_make_model, setYearMakeModel] = useState("");
  const [description, setDescription] = useState("");
  const [transmission, setTransmission] = useState("");
  const [roof, setRoof] = useState("");
  const [equipment, setEquipment] = useState("");
  const [dogs, setDogs] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  let newVan = {
    owner: owner,
    year_make_model: year_make_model,
    description: description,
    transmission: transmission,
    roof: roof,
    equipment: equipment,
    dogs: dogs,
    location: location,
    price: price,
    image: image,
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    fetch("/api/vans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVan),
    })
      .then((r) => r.json())
      .then((vanData) => {
        addVan(vanData);
        setYearMakeModel("");
        setOwner("");
        setDescription("");
        setTransmission("");
        setRoof("");
        setEquipment("");
        setDogs("");
        setLocation("");
        setPrice("");
        setImage("");
      });
    e.target.reset();
  };

  return (
    <div id="submit-van-container">
      <p>Rent out your WESTFALIA!</p>
      <div id="van-form-container">
        <Form onSubmit={handleSubmission}>
          <Form.Field
            onChange={(e) => setOwner(e.target.value)}
            value={owner}
            control={Input}
            placeholder="Your Name"
          />
          <Form.Field
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            control={Input}
            placeholder="Price per night"
          />
          <Form.Field
            onChange={(e) => setYearMakeModel(e.target.value)}
            value={year_make_model}
            control={Input}
            placeholder="Year Make Model"
          />
          <Form.Field
            onChange={(e) => setTransmission(e.target.value)}
            value={transmission}
            control={Input}
            placeholder="Transmission"
          />
          <Form.Field
            onChange={(e) => setRoof(e.target.value)}
            value={roof}
            control={Input}
            placeholder="Roof"
          />
          <Form.Field
            onChange={(e) => setEquipment(e.target.value)}
            value={equipment}
            control={Input}
            placeholder="Equipment"
          />
          <Form.Field
            onChange={(e) => setDogs(e.target.value)}
            value={dogs}
            control={Input}
            placeholder="Dogs?"
          />
          <Form.Field
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            control={Input}
            placeholder="Location"
          />
          <Form.Field
            onChange={(e) => setImage(e.target.value)}
            value={image}
            control={Input}
            placeholder="Image Url"
          />
          <Form.Field
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            control={TextArea}
            placeholder="Description"
          />
          <Form.Field control={Button} content="SUBMIT YOUR VAN!" />
        </Form>
      </div>
    </div>
  );
}

export default SubmitYourVan;
