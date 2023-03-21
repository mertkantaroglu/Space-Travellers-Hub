import Mission from '../components/Mission';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missionList, status } = useSelector((state) => state.missions);

  useEffect(() => {
    if (status === 'idle' || status === 'succeed') {
      dispatch(getMissions());
    }
  }, [status, dispatch]);

  return (
    <div>
      {missionList.map((mission) => (
        <Mission
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
        />
      ))}
    </div>
  );
};

export default Missions;
