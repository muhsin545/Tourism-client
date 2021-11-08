import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Subscibe from '../Subscibe/Subscibe';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Destination from './Destination/Destination';
import Packages from './Packages/Packages';


const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <Packages></Packages>
            <Destination></Destination>
            <Blog></Blog>
            <Subscibe></Subscibe>
        </div>
    );
};

export default Home;