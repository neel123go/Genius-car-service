import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            {/* to uncommand services component remove bootstrap link to index.html  */}
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;