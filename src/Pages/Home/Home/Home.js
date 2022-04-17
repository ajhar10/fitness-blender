import React from 'react';
import Header from '../../Shared/Header/Header';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Services></Services>
        </div>
    );
};

export default Home;