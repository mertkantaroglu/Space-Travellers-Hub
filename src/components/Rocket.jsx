import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { bookRocket, cancelRocket } from "../redux/Rocket/rocketSlice";

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookHandler = (id, reserved) => {
    if (reserved) {
      return dispatch(bookRocket(id));
    }
    return dispatch(cancelRocket(id));
  };

  return (
    <>
      <div>
        {rockets.map(
          ({ id, rocket_name, description, flickr_images, reserved }) => (
            <div key={id}>
              <img src={flickr_images} />
              <h2>{rocket_name}</h2>
              <p>{description}</p>
              <Button onClick={() => bookHandler(id, reserved)}>
                {reserved ? "Cancel Reservation" : "Reserve Rocket"}
              </Button>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Rockets;
