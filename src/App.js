import React from 'react';
import ProfilePhoto from './components/Profile/ProfilePhoto'
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Address';

const App = () => {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
};

export default App;
