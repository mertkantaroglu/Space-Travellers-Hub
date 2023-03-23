import "bootstrap/dist/css/bootstrap.min.css";
import MissionProfile from "./Mission/MissionProfile";
import { ReservedDragons } from "./Dragon";
import { Table, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";


const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <Row className="m-5">
        <Col sm={4}>
          <h2>My Rockets</h2>
          <tbody className="m-3">
            <div>{filteredRockets >= 0 && <p>No rockets reserved</p>}</div>
            {filteredRockets.map((rockets) => (
              <Table>
                <tr key={rockets.id}>
                  <td
                    hover
                    variant="light"
                    className="p-4"
                    style={{
                      width: 370,
                      borderBlockColor: "#d1cece",
                      borderWidth: 2,
                    }}
                  >
                    {rockets.name}
                  </td>
                </tr>
              </Table>
            ))}
          </tbody>
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
