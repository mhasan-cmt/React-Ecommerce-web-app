import React from 'react'
import Anouncement from '../components/Anouncement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
// import Slider from '../components/Slider'

const Homepage = () => {
    return (
        <div>
            <Anouncement/>
            <Navbar/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Homepage
