import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import Footer from "../common/footer/Footer";
import Banner from '../slider/Banner';
import FlashCard from '../flashcard/FlashCard';

const Home = () => {
  return (
  <>
    <div>
        <Header />
        <Navbar />
        <Banner />
        <FlashCard />
        <Footer />
    </div>
  </>

  )
}

export default Home