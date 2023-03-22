import React from 'react';
import { ReservedDragons } from './Dragon';

function Profile() {
  return (
    <div>
      <div className="my_dragons">
        <h2>My Dragons</h2>
        <ul className="dragons_list">
          <ReservedDragons />
        </ul>
      </div>
    </div>
  );
}

export default Profile;