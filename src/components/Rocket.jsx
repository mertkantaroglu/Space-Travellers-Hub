import React from "react";
import { useSelector } from "react-redux";

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <>
      <div className="card-list">
        {rockets.map(({ id, rocket_name, description, flickr_images }) => (
          <div key={id}>
            <img src={flickr_images} alt={rocket_name}/>
            <h2>{rocket_name}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rockets;
