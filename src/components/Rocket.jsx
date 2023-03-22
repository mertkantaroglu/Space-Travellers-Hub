import React from "react";
import { useSelector } from "react-redux";

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <>
      <div>
        {rockets.map(
          ({ id, rocket_name, description, flickr_images, reserved }) => (
            <div key={id}>
              <img src={flickr_images} />
              <h2>{rocket_name}</h2>
              <p>{description}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Rockets;
