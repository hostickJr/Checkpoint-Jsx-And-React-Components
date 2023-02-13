import React from 'react';

const ProfilePhoto = () => {
  const style = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover"
  };

  return <img src='mypicture.png' alt='me' style = {style} />
};

export default ProfilePhoto;