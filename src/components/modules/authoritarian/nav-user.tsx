import AuthoritarianSteps from './authoritarian-steps';
import { Skeleton } from '../skeleton';
import { User } from '../../../types/user.types';

const NavUser = ({ user, isLoading }: { user: User, isLoading: boolean }) => {
  return <div>{isLoading ? <Skeleton className='sm:!w-20 w-11 h-9 rounded-lg' /> : user ? <p>login</p> : <AuthoritarianSteps />}</div>;
};

export default NavUser;
