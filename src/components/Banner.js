import React from 'react';
import Logo from "./assets/assets/logo.png"
import   './assets/Banner.css'
const Banner = () => {
    return (
        <div className="banner">

            <img className="img" src={Logo}/>
            <p className="text">La maison jungle</p>
        </div>
    );
};

export default Banner;