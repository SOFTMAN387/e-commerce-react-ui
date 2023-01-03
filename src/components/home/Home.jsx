import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import Footer from "../common/footer/Footer";
import Banner from '../slider/Banner';
import FlashCard from '../flashcard/FlashCard';
import TopCat from '../topcat/TopCat';
import NewArivals from '../arrivals/NewArivals';
import Services from '../common/service/Services';
import ProductsLists from '../../pages/productslist/ProductsLists';

const Home = () => {
  return (
  <>
    <div>
        <Header />
        <Navbar />
        <Banner />
        <FlashCard />
        <TopCat />
        <NewArivals />
        <ProductsLists />
        <Services />
        <Footer />
    </div>
  </>

  )
}

export default Home