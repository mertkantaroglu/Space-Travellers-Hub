import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getDragon } from '../redux/dragon/dragonSlice'

function Dragons({
  name, type, image,
}) {
  return (

    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <img src={image} alt="dragon" />
    </div>
  );
}

Dragons.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
          image={dragons.flickr_images}
        />

      ))}
    </div>
  );
}

export default Dragon;