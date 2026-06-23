import React, { useState } from 'react';
import AuthoritarianSteps from './authoritarian-steps';
import { useUser } from '../../../hooks/useUser';
import { Skeleton } from '../skeleton';

const NavUser = () => {
  const { data: user, isLoading } = useUser();

  return <div>{isLoading ? <Skeleton className='sm:!w-20 w-11 h-9 rounded-lg' /> : user ? <p>login</p> : <AuthoritarianSteps />}</div>;
};

export default NavUser;
