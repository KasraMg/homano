import React from 'react'
import Container from '../../modules/container'
import Order from './partials/order'
import Main from './partials/main'
import Reviews from './partials/reviews'
import { useParams } from "react-router-dom";
import useProduct from '../../../hooks/useProduct'
const ProductScreen = () => {
    const { code, slug } = useParams();
    const { data, isPending } = useProduct(Number(code));
    console.log(data);

    return (
        <Container>
            <div className='py-10'>
                {!isPending ? (
                    <>
                        <div className="flex gap-4">
                            <Main data={data} />
                            <Order data={data} />
                        </div>
                        <Reviews data={data} /></>
                ) : ""}

            </div>
        </Container>
    )
}

export default ProductScreen