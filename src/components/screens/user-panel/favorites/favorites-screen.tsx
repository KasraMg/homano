import { Heart } from 'lucide-react';
import { useUser } from '../../../../hooks/useUser';
import ProductSkeleton from '../../shop/partials/product-skeleton';
import { WishlistItem } from '../../../../types/user.types';
import Card from '../../../modules/product-card';

const FavoritesScreen = () => {
  const { data, isPending } = useUser();

  return (
    <section className="my-10 rounded-md border bg-white p-6 shadow-lg">
      <div className="flex items-center justify-start gap-3">
        <div className="bg-neutral-01 flex size-9 items-center justify-center rounded-md">
          <Heart className="text-secondary-color-blue" />
        </div>
        <h2 className="font-VazirBold text-neutral-07 flex items-center text-2xl">
          علاقه مندی های من
        </h2>
      </div>

      {!isPending || (data as any)?.wishlist.length == 0 ? (
        data?.wishlist.length > 0 ? (
          <div className="w-full space-y-5 pt-10">
            <div className="grid w-full grid-cols-1 gap-6 sm:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4">
              {data.wishlist.map((pr: WishlistItem) => (
                <Card isPanel data={{ ...pr.product, isInCart: true }} />
              ))}
            </div>
          </div>
        ) : (
          <p className="w-full py-20 text-center text-2xl">کالایی یافت نشد</p>
        )
      ) : (
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-6 lg:!grid-cols-3">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      )}
    </section>
  );
};

export default FavoritesScreen;
