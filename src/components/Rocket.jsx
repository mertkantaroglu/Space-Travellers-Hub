import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { bookRocket } from "../redux/Rocket/rocketSlice";

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookHandler = (id) => {
    dispatch(bookRocket(id));
  };

  return (
    <>
      <div>
        {rockets.map(({ id, rocket_name, description, flickr_images }) => (
          <div key={id}>
            <img src={flickr_images} />
            <h2>{rocket_name}</h2>
            <p>{description}</p>
            <Button type="Button" onClick={() => bookHandler(id)}>
              Reserved
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rockets;
