import React, { useState } from 'react';
import AuthoritarianSteps from './authoritarian-steps';

const NavUser = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  return <div>{isUserLogin ? <p>login</p> : <AuthoritarianSteps />}</div>;
};

export default NavUser;
