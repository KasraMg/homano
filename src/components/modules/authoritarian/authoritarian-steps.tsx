import { useState } from 'react';
import { Button } from '../../ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '../../ui/dialog';
import Register from './register';
import Login from './login';
import { LogInIcon } from 'lucide-react';

const AuthoritarianSteps = () => {
  const [step, setStep] = useState('login');
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'mainShaded'}>
            <span className='sm:!block hidden'> ورود / ثبت نام</span>
            <LogInIcon size={28} className='sm:!hidden block size-5' />
          </Button>
        </DialogTrigger>
        <DialogContent
          dir="rtl"
          className="max-w-[350px] !overflow-visible !rounded-2xl !bg-white !px-6 md:max-w-[500px]"
        >
          {step == 'login' ? <Login setStep={setStep} /> : <Register setStep={setStep} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthoritarianSteps;
