import 'bootstrap/dist/css/bootstrap.min.css';
import MissionProfile from './Mission/MissionProfile';
import { ReservedDragons } from './Dragon';
import { ReservedRocket } from './Rocket';

const MyProfile = () => (
  <>
    <section className="profile-section">
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <ReservedRocket />
      </div>
      <div className="mission-profile">
        <MissionProfile />
      </div>
      <div className="dragon-profile">
        <h2>My Dragons</h2>
        <ReservedDragons />
      </div>
    </section>
  </>
);

export default MyProfile;
