import React from 'react'
import './annoucement.css';
import SearchBar from '../searchbar/SearchBar';
const Annoucement = () => {
  return (
    <>
       <div className='announcement'>
        <div className='superDeal'>
        Super Deal ! Free Shipping on Orders Over $1000
        </div>
        <div className='searchBtn'><SearchBar /></div>
      </div>
    </>
  )
}

export default Annoucement;