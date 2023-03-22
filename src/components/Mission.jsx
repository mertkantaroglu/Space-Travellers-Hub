import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';

const Mission = ({ id, name, description, reserved }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="missions">
        <div className="missions-info">
          <p>Mission</p>
          <p>Description</p>
          <p>Status</p>
        </div>
        <div className="missions-details">
          <h2>{name}</h2>
          <p>{description}</p>
          <h3 className={`status ${reserved ? "active" : "notActive"}`}>
            {reserved ? 'Active Member' : 'NOT A MEMBER'}
          </h3>
          <button type="button" onClick={reserved ?
            () => {dispatch(leaveMission(id))}
            : () => {dispatch(joinMission(id))}}
            >
          {reserved ?
          'Leave Mission' : 'Join Mission'
          }
          </button>
        </div>
      </section>
    </div>
  )
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
