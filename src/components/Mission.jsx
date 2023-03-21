import PropTypes from 'prop-types';

const Missions = ({ mission, description, status }) => {
  return (
    <div>
      <section className="missions">
        <ul className="missions-info">
          <li>Mission</li>
          <li>Description</li>
          <li>Status</li>
        </ul>
        <ul>
          <li>{mission}</li>
          <li>{description}</li>
          <li>{status}</li>
          <button type="button">Join Mission</button>
        </ul>
      </section>
    </div>
  )
};

Missions.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Missions;
