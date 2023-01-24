import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/header/Header';
import Services from '../../components/common/service/Services';
import Footer from '../../components/common/footer/Footer';

const Ordered = () => {
    const UserOrderedDetails = useSelector((state) => state) ?? [];
    console.log(UserOrderedDetails);
    return (
        <>
        <Header />
            <div>User Ordered Details</div>
        <Services />
        <Footer />
    </>
    )
}

export default Ordered;