import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Badge, Row, Col, Table,
} from 'react-bootstrap';
import { fetchRockets, bookRocket, cancelRocket } from '../redux/Rocket/rocketSlice';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  const bookHandler = (id, reserved) => {
    if (reserved) {
      return dispatch(cancelRocket(id));
    }
    return dispatch(bookRocket(id));
  };

  return (
    <>
      <div>
        {rockets.map(({
          id, name, description, flickrImages, reserved,
        }) => (
          <Row
            className="rocket-container align-items-center mt-md-3 m-5"
            data-testid="rocket"
            key={id}
          >
            <Col sm={5} md={4} lg={3}>
              <img src={flickrImages} alt="rocket" width="100%" />
            </Col>
            <Col className="rocket-description">
              <h2 className="text-capitalize">{name}</h2>
              <p>
                {reserved && (
                <Badge
                  bg="success"
                  className="p-2"
                  style={{ marginRight: '1vw' }}
                >
                  Reserved
                </Badge>
                )}
                {description}
              </p>
              <Button onClick={() => bookHandler(id, reserved)}>
                {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}

const ReservedRocket = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <tbody className="m-3">
        <div>{filteredRockets >= 0 && <p>No rockets reserved</p>}</div>
        {filteredRockets.map((rockets) => (
          <Table key={rockets.id}>
            <td
              className="p-4"
              style={{
                width: 370,
                borderBlockColor: '#d1cece',
                borderWidth: 2,
              }}
            >
              {rockets.name}
            </td>
          </Table>
        ))}
      </tbody>
    </>
  );
};

export { ReservedRocket };
export default Rockets;
