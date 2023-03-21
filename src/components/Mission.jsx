import PropTypes from 'prop-types';

const Mission = ({ name, description, status }) => {
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
          <h3>{status}</h3>
          <button type="button">Join Mission</button>
        </div>
      </section>
    </div>
  )
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Mission;
