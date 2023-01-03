import React from "react";
import VanCard from "./VanCard";

function VanList({ vans, user }) {
  const vanCards = vans.map((van) => {
    return (
      <VanCard
        year_make_model={van.year_make_model}
        description={van.description}
        transmission={van.transmission}
        roof={van.roof}
        equipment={van.equipment}
        dogs={van.dogs}
        location={van.location}
        owner={van.owner}
        price={van.price}
        image={van.image}
        id={van.id}
        user={van.user}
        key={"van-list" + van.id}
      />
    );
  });

  return (
    // <ul>
    <div>{vanCards}</div>
    // </ul>
  );
}

export default VanList;
