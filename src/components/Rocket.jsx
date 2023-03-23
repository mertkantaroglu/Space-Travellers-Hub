import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { bookRocket, cancelRocket } from "../redux/Rocket/rocketSlice";
// import { Table } from "react-bootstrap";

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
const ReservedRocket = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      {filteredRockets.map((rockets) => (
        // <Table hover variant="light">
        <tr key={rockets.id}>
          <td className="p-4 w-100">{rockets.rocket_name}</td>
        </tr>
        // </Table>
      ))}
    </div>
  );
};

export { ReservedRocket };
export default Rockets;
