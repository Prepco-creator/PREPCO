import React from 'react'
import Banner from '../comman/Banner'
import CheckoutForm from './CheckoutForm'
import Footer from '../comman/Footer'

const Checkout = () => {
    return (
        <section>
            <Banner title='Checkout' />
            <CheckoutForm />
            <Footer/>
        </section>
    )
}

export default Checkout