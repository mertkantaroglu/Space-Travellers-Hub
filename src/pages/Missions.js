import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../components/Mission/Mission';
import { getMissions } from '../redux/mission/missionSlice';

const Missions = () => {
  const { missionList } = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missionList]);

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
