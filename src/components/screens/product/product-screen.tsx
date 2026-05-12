import React from 'react'
import Container from '../../modules/container'
import Order from './partials/order'
import Main from './partials/main'
import Reviews from './partials/reviews'

const ProductScreen = () => {
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