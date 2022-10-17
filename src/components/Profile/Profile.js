import { Typography } from '@mui/material'
import React from 'react'
import './profile.css'
import profileImage from '../../assets/displayPicture.jpeg'

const Profile = () => {
  return (
    <div className="profile container-shadow ">
      <div className="profile-name">
        <Typography className="name">Manish Kumar</Typography>
        <Typography className="title">Fullstack Developer</Typography>
      </div>
      <figure className="profile-image">
        <img src={profileImage} alt="" />
      </figure>
      <div className="profile-info">
        timeline
        <br />
        <button>Download cv</button>
      </div>
    </div>
  );
}

export default Profile