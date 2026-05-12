import Container from '../../modules/container'
import Stepper from '../../modules/stepper';
import CheckoutForm from './partials/checkout-form';
import { OrderSummary } from './partials/order-summary';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const CheckoutScreen = () => { 
    const handleCheckout = (data: any) => {
    console.log("FORM DATA ✅", data)
  }
  return (
    <Container>
      <div className="flex flex-col items-center py-10 relative">
        <Stepper
          title="تکمیل خرید"
          currentStep={2}
        />
        <div className="flex md:!flex-row flex-col gap-6 py-10 w-full relative">
          <CheckoutForm onSubmit={handleCheckout}/>
          <div className='w-full xl:w-2/5 sticky top-4 h-max'>
            <OrderSummary />
          <div className='flex gap-2 items-center py-3 justify-center'>
            <p className='font-extrabold'>پرداخت امن با</p>
              <img src="/Images/zarinpal.jpg" className='h-6' alt="" />
          </div>
            <Button 
             form="checkout-form"  
            type="submit" 
            className='w-full h-12' variant={"main"}>
              ثبت سفارش
            </Button> 
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutScreen