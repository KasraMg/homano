import Statistics from './partials/statistics';
import LastOrders from './partials/last-orders';
import FavoriteProducts from './partials/favorite-products';
import { useUser } from '../../../../hooks/useUser';

const DashboardScreen = () => {
    const { data } = useUser();
  
  return (
    <>
      <Statistics />
      <div className="mb-5 flex w-full flex-col gap-4 xl:flex-row" dir="rtl">
        <LastOrders data={data} />
        <FavoriteProducts data={data}/>
      </div>
    </>
  );
};

export default DashboardScreen;
