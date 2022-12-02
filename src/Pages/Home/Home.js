import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Info from './Info/Info';
import Popular from './Popular/Popular';


const Home = () => {
    return (
        <div className='gap-3'>
            <Banner></Banner>
            <Services></Services>

            <Popular></Popular>
            <Info></Info>
        </div>
    );
};

export default Home;