import { useSelector } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
import MissionProfile from './Mission/MissionProfile';
import { ReservedDragons } from './Dragon';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <>
      <Row className="m-5">
        <Col sm={6}>
          <div className="mission-profile">
            <MissionProfile />
          </div>
          <div className="my_dragons">
            <h2>My Dragons</h2>
            <ul className="dragons_list">
              <ReservedDragons />
            </ul>
          </div>
        </Col>
        <Col sm={6}>
          <h2>My Rockets</h2>
          <Table hover variant="light">
            <tbody>
              {rockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td className="p-4">{rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MyProfile;
