import Container from '../../modules/container'
import Order from './partials/order'
import Main from './partials/main'
import Reviews from './partials/reviews'
import { useParams } from "react-router-dom";
import useProduct from '../../../hooks/useProduct'
import ProductScreenSkeleton from './partials/product-screen-skeleton'
const ProductScreen = () => {
    const { code, slug } = useParams();
    const { data, isPending } = useProduct(Number(code));
    console.log(data);

    return (
        <Container>
            <div className='sm:!py-10 py-5'>
                {!isPending ? (
                    <>
                        <div className="flex lg:!flex-row flex-col gap-4">
                            <Main data={data} />
                            <Order data={data} />
                        </div>
                        <Reviews data={data} />
                    </>

                ) : <ProductScreenSkeleton />}

            </div>
        </Container>
    )
}

export default ProductScreen