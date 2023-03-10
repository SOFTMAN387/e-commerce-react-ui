import React, { useState } from 'react'
import "./searchbox.css";
import { useNavigate } from 'react-router-dom';
//import FilterByCategory from '../../../pages/productslist/FilterByCategory';
const SearchBar = () => {
    const navigate=useNavigate();
    const [searchkey, setSearch] = useState("");
    const searcNavigate=()=>{
        if(searchkey){
            navigate(`searchLists/${searchkey}`);
        }
       
    }
    const onSearchChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    }
    return (
        <>
            <div className="searchbox">
           
                <button className="btnsearch" onClick={searcNavigate}><i className="fas fa-search"></i></button>
                <span className='searchText'>Search</span>
                <input type="text" onChange={onSearchChange} className="inputsearch" placeholder="Search product..." />
            </div>
            
        </>
    )
}

export default SearchBar;