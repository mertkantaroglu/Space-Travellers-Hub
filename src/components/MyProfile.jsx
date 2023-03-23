import "bootstrap/dist/css/bootstrap.min.css";
import MissionProfile from "./Mission/MissionProfile";
import { ReservedDragons } from "./Dragon";
import { ReservedRocket } from "./Rocket";
import { Row, Col } from "react-bootstrap";

const MyProfile = () => {
  return (
    <>
      <Row className="m-5">
        <Col sm={4}>
          <h2>My Rockets</h2>
          <ReservedRocket />
        </Col>
        <Col sm={4}>
          <div className="mission-profile">
            <MissionProfile />
          </div>
        </Col>
        <Col sm={4}>
          <div className="my_dragons">
            <h2>My Dragons</h2>
            <ul className="dragons_list">
              <ReservedDragons />
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MyProfile;
