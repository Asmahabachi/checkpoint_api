import React from 'react';
import {Link} from 'react-router-dom';


const UserCard = ({user}) => {
    return (
        <div className="card">
             <img
        src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
        alt="profile"
      />
      <div class="card-body">
          <Link to={`/user/${user.id}`}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <h5>{user.phone}</h5>
          </Link>
      </div>
    </div>
    );
};

export default UserCard;
