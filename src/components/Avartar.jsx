import React from "react";

export default function Avartar({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avartat"></img>
      {isNew && <span className="new">New</span>}
    </div>
  );
}
