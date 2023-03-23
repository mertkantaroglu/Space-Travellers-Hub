import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { bookRocket, cancelRocket } from "../redux/Rocket/rocketSlice";

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookHandler = (id, reserved) => {
    if (reserved) {
      return dispatch(cancelRocket(id));
    }
    return dispatch(bookRocket(id));
  };

  return (
    <>
      <div>
        {rockets.map(
          ({ id, rocket_name, description, flickr_images, reserved }) => (
            <Row
              className="rocket-container align-items-center mt-md-3 m-5"
              data-testid="rocket"
              key={id}
            >
              <Col sm={5} md={4} lg={3}>
                <img src={flickr_images} width="100%" />
              </Col>
              <Col className="rocket-description">
                <h2 className="text-capitalize">{rocket_name}</h2>
                <p>
                  {reserved && (
                    <Badge
                      bg="success"
                      className="p-2"
                      style={{ marginRight: "1vw" }}
                    >
                      Reserved
                    </Badge>
                  )}
                  {description}
                </p>
                <Button onClick={() => bookHandler(id, reserved)}>
                  {reserved ? "Cancel Reservation" : "Reserve Rocket"}
                </Button>
              </Col>
            </Row>
          )
        )}
      </div>
    </>
  );
}

export default Rockets;
