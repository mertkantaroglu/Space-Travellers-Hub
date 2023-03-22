import MissionProfile from "./Mission/MissionProfile";
import { ReservedDragons } from './Dragon';

const MyProfile = () => {
  return (
    <section className="profile-section">
      <div className="mission-profile">
        <MissionProfile />
      </div>
      <div className="dragon-profile">
        <h2>My Dragons</h2>
        <ReservedDragons />
      </div>
    </section>
  );
};

export default MyProfile;