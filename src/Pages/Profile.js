import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <div>
      This is the profile page for {id}!
      <button onClick={() => navigate('/about')}>Change to about page</button>
    </div>
  );
};

export default Profile;
