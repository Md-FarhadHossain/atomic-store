import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import PackageSection from '../../components/PackageSection/PackageSection'
import ProductReview from '../../components/ProductReview/ProductReview'


const Home = () => {
  return (
    <>
        {/* <Navbar /> */}
        <HeroSection />
        <PackageSection />
        <ProductReview />
    </>
  )
}

export default Home