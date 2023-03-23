import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missionList } = useSelector((state) => state.missions);
  const joinedMissions = missionList.filter((mission) => mission.reserved);
  return (
    <>
      <h2>My Missions</h2>
      {joinedMissions.length === 0 ? (
        <p className="no-missions">No Missions Joined</p>
      ) : (
        <div>
          {joinedMissions.map((mission) => (
            <>
              <p key={mission.id} />
              <p className="mission-reservations">{mission.name}</p>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default MissionProfile;
