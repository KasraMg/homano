import React from 'react'
import Container from '../../modules/container'
import Order from './partials/order'
import Main from './partials/main'
import Reviews from './partials/reviews'
import { useParams } from "react-router-dom";
const ProductScreen = () => {
    const { id } = useParams();

    return (
        <Container>
            <div className='py-10'>
                <div className="flex gap-4">
                    <Main />
                    <Order />
                </div>
                <Reviews />
            </div>
        </Container>
    )
}

export default ProductScreen