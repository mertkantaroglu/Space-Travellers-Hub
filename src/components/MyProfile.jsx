import MissionProfile from "./Mission/MissionProfile";
import { ReservedDragons } from './Dragon';

const MyProfile = () => {
  return (
  <div className="mission-profile">
    <MissionProfile />
  </div>
  <div className="my_dragons">
    <h2>My Dragons</h2>
    <ul className="dragons_list">
      <ReservedDragons />
    </ul>
  </div>

  );
};

export default Profile;