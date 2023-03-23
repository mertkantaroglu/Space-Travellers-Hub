import "bootstrap/dist/css/bootstrap.min.css";
import MissionProfile from "./Mission/MissionProfile";
import { ReservedDragons } from "./Dragon";
import { Table, Row, Col } from "react-bootstrap";
import { ReservedRocket } from "./Rocket";

const MyProfile = () => {
  return (
    <>
      <Row className="m-5">
        <Col sm={4}>
          <h2>My Rockets</h2>
          <tbody className="m-3">
            <Table hover variant="light" className=" w-100">
              <ReservedRocket />
            </Table>
          </tbody>
        </Col>
        <Col sm={4}>
          <div className="mission-profile">
            <tbody>
              <Table hover variant="light" className="w-100">
                <MissionProfile />
              </Table>
            </tbody>
          </div>
        </Col>
        <Col sm={4}>
          <div className="my_dragons">
            <h2>My Dragons</h2>
            <ul className="dragons_list">
              <tbody>
                <Table hover variant="light" className="w-100">
                  <ReservedDragons />
                </Table>
              </tbody>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MyProfile;
