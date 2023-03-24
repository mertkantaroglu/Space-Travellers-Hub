import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getDragon, cancelDragon, reserveDragon } from '../redux/dragon/dragonSlice';
import '../styles/dragon.css';

function Dragons({
  id, name, type, image, reserved,
}) {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon({ id }));
  };

  const handleCancel = () => {
    dispatch(cancelDragon({ id }));
  };

  return (
    <section className="dragon-section">
      <div className="img-container">
        <img src={image} className="dragon-img" alt="dragon" />
      </div>
      <div className="details-container">
        <h1>{name}</h1>
        <p>{type}</p>

        <div className={`status ${reserved ? 'active reserve-section' : 'notActive'}`}>
          <h3 className="reserved">
            {reserved ? 'Reserved' : ''}
          </h3>

        </div>
        {reserved ? (
          <button
            onClick={handleCancel}
            type="button"
            className="cancel-reserve-btn"
          >
            Cancel Reservation
          </button>
        ) : (
          <button onClick={handleReserve} type="button" className="reserve-btn">
            Reserve Dragon
          </button>
        )}
      </div>
    </section>
  );
}

const ReservedDragons = () => {
  const dragons = useSelector((state) => state.dragons.dragonStore);
  const filterDragons = dragons.filter((dragons) => dragons.reserved);

  return (
    <>
      {filterDragons.length === 0 ? (
        <p className="no-dragons">No Dragons Reserved</p>
      ) : (
        <div>
          {filterDragons.map((dragon) => (
            <p className="dragon-reservations" key={dragon.id}>{dragon.name}</p>

          ))}
        </div>
      )}
    </>
  );
};

Dragons.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

function Dragon() {
  const dragonsArr = useSelector((state) => state.dragons.dragonStore);
  const status = useSelector((state) => state.dragons.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') dispatch(getDragon());
  }, [dispatch, status]);
  return (
    <div>
      {dragonsArr.map((dragons) => (
        <Dragons
          key={dragons.id}
          id={dragons.id}
          name={dragons.name}
          type={dragons.type}
          image={dragons.flickr_images[0]}
          reserved={dragons.reserved}
        />
      ))}
    </div>
  );
}

export { ReservedDragons };
export default Dragon;
