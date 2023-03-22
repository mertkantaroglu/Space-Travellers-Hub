import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getDragon } from '../redux/dragon/dragonSlice'
import { cancelDragon, reserveDragon } from '../redux/dragon/dragonSlice';

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
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <img src={image} alt="dragon" />
      <h3 className={`status ${reserved ? "active" : "notActive"}`}>
        {reserved ? 'Reserved' : ''}
      </h3>
      {reserved ? (
        <button onClick={handleCancel} type="button">
          Cancel booking
        </button>
      ) : (
        <button onClick={handleReserve} type="button">
          Reserve dragon
        </button>
      )}
    </div>
  );
}

Dragons.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

function Dragon() {
  const dragonsArr = useSelector((state) => state.dragons.dragonStore);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getDragon());}, [dispatch]);
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

export default Dragon;