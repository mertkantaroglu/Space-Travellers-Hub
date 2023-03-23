import { useSelector } from 'react-redux';
import Mission from '../components/Mission/Mission';

const Missions = () => {
  const { missionList } = useSelector((state) => state.missions);

  return (
    <>
      <div className="missions-info">
        <p>Mission</p>
        <p>Description</p>
        <p>Status</p>
        <p />
      </div>
      <div>
        {missionList.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </div>
    </>
  );
};

export default Missions;
