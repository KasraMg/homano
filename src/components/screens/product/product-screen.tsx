import Container from '../../modules/container'
import Order from './partials/order'
import Main from './partials/main'
import Reviews from './partials/reviews'
import { useParams } from "react-router-dom";
import useProduct from '../../../hooks/useProduct'
import ProductScreenSkeleton from './partials/product-screen-skeleton'
import { useEffect, useState } from 'react';
const ProductScreen = () => {
    const { code } = useParams();
    const { data, isPending } = useProduct(Number(code));
    const [activeColor, setActiveColor] = useState < { code: string, name: string } | null > (null)
    console.log('product', data);
    useEffect(() => {
        if (data?.colors[0].code) {
            setActiveColor(data?.colors[0])
        }
    }, [data])

    return (
        <Container>
            <div className='sm:!py-10 py-5'>
                {!isPending ? (
                    <>
                        <div className="flex lg:!flex-row flex-col gap-4">
                            <Main activeColor={activeColor} setActiveColor={setActiveColor} data={data} />
                            <Order activeColor={activeColor} data={data} />
                        </div>
                        <Reviews data={data} />
                    </>
                ) : <ProductScreenSkeleton />}

            </div>
        </Container>
    )
}

export default ProductScreen