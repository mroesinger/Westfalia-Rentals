import React from "react";
import VanList from "./VanList";

function VanPage({ vans, addVan, user }) {
  console.log(vans);

  return (
    <div>
      <main>
        <VanList vans={vans} addVan={addVan} user={user} />
      </main>
    </div>
  );
}

export default VanPage;
